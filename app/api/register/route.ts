import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

interface IBody {
  name: string;
  email: string;
  password: string;
}
export const POST = async (request: Request) => {
  const bcryptSalt = 10;

  try {
    const { name, email, password }: IBody = await request.json();
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    await prisma.user.create({
      data: {
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });

    const data = await prisma.user.findMany();
    return NextResponse.json({ data });
  } catch (error: any) {
    // error.code "P2002" is returned from prisma when unique constraint is voilated.
    if (error.code === "P2002") {
      // as we have only one unique constraint for email only.
      return new Response(JSON.stringify({ message: "Email already exist" }), {
        status: 400,
      });
    }

    // default error response.
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
};
