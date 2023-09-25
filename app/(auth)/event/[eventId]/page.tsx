import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import AttendeesTable from "./components/AttendeesTable";

interface Params {
  params: {
    eventId: string;
  };
}
const EventDetails = async ({ params: { eventId } }: Params) => {
  const session = await getServerSession(authOptions);
  const event = await prisma.event.findUniqueOrThrow({
    where: { id: eventId },
    include: {
      attendees: true,
    },
  });

  //   event is not created by the current logged in user.
  if (event.creatorId !== session?.user.id) redirect("/dashboard");

  const { attendees, title } = event;
  return (
    <div className="min-h-screen">
      <div className="event-details-img text-white font-bold text-xl md:text-2xl flex justify-center items-center">
        {title}
      </div>
      <div className="relative overflow-x-auto m-4">
        <AttendeesTable attendees={attendees} />
      </div>
    </div>
  );
};

export default EventDetails;
