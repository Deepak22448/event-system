"use client";
import { FC, MouseEvent } from "react";
import { Icon } from "./Icon";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  eventId: string;
}
const DeleteEventButton: FC<Props> = ({ eventId }) => {
  const router = useRouter();

  const handleDeleteEvent = async (_event: MouseEvent<HTMLDivElement>) => {
    try {
      await fetch(`/api/event/${eventId}/delete`, {
        method: "DELETE",
        cache: "no-store",
      });
      toast.success("Event deleted.");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div onClick={handleDeleteEvent}>
      <Icon src="/icons/bin.svg" />
    </div>
  );
};

export default DeleteEventButton;
