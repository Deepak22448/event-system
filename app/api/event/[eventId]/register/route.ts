import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface Params {
  params: {
    eventId: string;
  };
}

export const POST = async (
  _request: Request,
  { params: { eventId } }: Params
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) throw new Error("Problem while authentication.");

    await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        attendeesIds: {
          push: session.user.id,
        },
      },
    });

    return NextResponse.json({
      message: `Successfully registered to event id:${eventId} as email:${session.user.email}`,
    });
  } catch (error) {
    console.error({ error });
    return new Response("Internal server error", {
      status: 500,
    });
  }
};
