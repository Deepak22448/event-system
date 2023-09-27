import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface Params {
  params: {
    eventId: string;
  };
}
export const DELETE = async (
  _req: Request,
  { params: { eventId } }: Params
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) throw new Error("Error while authentication.");
    const event = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });

    if (event?.creatorId === session.user.id) {
      await prisma.event.delete({
        where: {
          id: eventId,
        },
      });
    }
    return NextResponse.json({ message: "event deleted." });
  } catch (error) {
    return new Response("Internal server error", {
      status: 500,
    });
  }
};
