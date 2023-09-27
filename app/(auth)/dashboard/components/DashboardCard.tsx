import { Prisma } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";
import { Icon } from "./Icon";
import DeleteEventButton from "./DeleteEventButton";

interface Props {
  event: Prisma.EventGetPayload<{}>;
}
const DashboardCard: FC<Props> = ({ event }) => {
  const { title, time, date, venu, attendeesIds } = event;

  return (
    <div className="border rounded space-y-1 h-64 flex flex-col justify-between overflow-hidden">
      <Link href={`/event/${event.id}`}>
        <div className="p-4">
          <h1 className="font-bold text-lg tracking-wider mb-3 truncate">
            {title}
          </h1>
          <h6 className="font-bold truncate">
            {attendeesIds.length + " "} People registered{" "}
          </h6>
          <p className="font-thin text-gray-400 truncate">Time:{" " + time}</p>
          <p className="font-thin text-gray-400 truncate">Date:{" " + date}</p>
          <p className="font-thin text-gray-400 line-clamp-2">
            Venu:{" " + venu}
          </p>
        </div>
      </Link>
      <div className="bg-orange-400 flex justify-between items-center p-4">
        <DeleteEventButton eventId={event.id} />
        <Icon src="/icons/share.svg" />
      </div>
    </div>
  );
};

export default DashboardCard;
