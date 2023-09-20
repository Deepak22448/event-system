import bcrypt from "bcryptjs";
import { prisma } from "@/prisma/db";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const CREDENTIALS_PROVIDER_NAME = "credentials";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: CREDENTIALS_PROVIDER_NAME,
      credentials: {
        email: {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password", name: "password" },
      },
      async authorize(credentials, _req) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Fill required credentials.");
        }
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) throw new Error("Invalid credentials.");

        const { password: hashedUserPassword, ...restUserDetails } = user;
        const isPasswordCorrect = await bcrypt.compare(
          password,
          hashedUserPassword!
        );
        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials.");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, token }) {
      if (token.sub) session.user.id = token.sub;

      return session;
    },
  },
};
