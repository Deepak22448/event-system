import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

interface Params {
  params: {
    eventId: string;
  };
}
const Register = async ({ params: { eventId } }: Params) => {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Problem while Authentication.");
  const event = await prisma.event.findUniqueOrThrow({
    where: { id: eventId },
    include: {
      creator: true,
    },
  });

  const isRegistered = event.attendeesIds.includes(session.user.id);

  if (isRegistered) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
        <h2 className="text-lg md:text-xl text-orange-500 font-bold">
          Allready registered
        </h2>
        <Link
          href="/dashboard"
          className="text-white bg-orange-500 hover:bg-orange-400 px-8 py-4 uppercase rounded"
        >
          Dashboard
        </Link>
      </div>
    );
  }

  return (
    <RegisterForm
      creatorEmail={event.creator.email!}
      eventId={eventId}
      title={event.title}
    />
  );
};

export default Register;
