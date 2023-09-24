import { ICreateEvent } from "@/app/(auth)/event/create/components/CreateEventForm";
import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const session = await getServerSession(authOptions);
    const body: ICreateEvent = await request.json();
    const newEvent = await prisma.event.create({
      data: {
        ...body,
        creatorId: session?.user.id!,
      },
    });

    return NextResponse.json({
      message: `Event with id:${newEvent.id} created.`,
    });
  } catch (error) {
    console.log({ error });
    return new Response("Internal server error", {
      status: 500,
    });
  }
};
