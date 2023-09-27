"use client";
import Input from "@/app/(no-auth)/register/components/Input";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export interface ICreateEvent {
  title: string;
  date: string;
  time: string;
  venu: string;
  eventDescription?: string;
}

const CreateEventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateEvent>();
  const router = useRouter();

  const handleCreateEvent = async (data: ICreateEvent) => {
    try {
      await fetch("/api/event/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Event created");
      router.push("/dashboard");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form
      className="space-y-3 w-full"
      onSubmit={handleSubmit(handleCreateEvent)}
    >
      <Input
        name="title"
        label="Title"
        register={register}
        id="title"
        type="text"
        isRequired
        error={errors.time?.message}
      />
      <div className="flex space-x-4">
        <Input
          name="date"
          label="Date"
          register={register}
          id="date"
          type="date"
          isRequired
          error={errors.date?.message}
        />
        <Input
          name="time"
          label="Time"
          register={register}
          id="time"
          type="time"
          error={errors.time?.message}
          isRequired
        />
      </div>
      <Input
        name="venu"
        label="Venu"
        register={register}
        id="venu"
        type="text"
        placeholder="Plot Address, India."
        isRequired
        error={errors.venu?.message}
      />
      <Input
        name="eventDescription"
        label="Event Description"
        id="event-description"
        type="text"
        placeholder="Any info about the event"
        register={register}
        error={errors.eventDescription?.message}
      />
      <button className="bg-orange-400 hover:bg-orange-300 p-4 align-baseline w-1/2 md:w-1/5 mx-auto block md:mx-0 md:aspect-auto">
        Create
      </button>
    </form>
  );
};

export default CreateEventForm;
