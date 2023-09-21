"use client";
import Input from "@/app/(no-auth)/register/components/Input";
import React from "react";
import { useForm } from "react-hook-form";

const CreateEventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  return (
    <form className="space-y-3 w-full">
      <Input
        name="title"
        label="Title"
        register={register}
        id="title"
        type="text"
      />
      <div className="flex space-x-4">
        <Input
          name="date"
          label="Date"
          register={register}
          id="date"
          type="date"
        />
        <Input
          name="time"
          label="Time"
          register={register}
          id="time"
          type="time"
        />
      </div>
      <Input
        name="venu"
        label="Venu"
        register={register}
        id="venu"
        type="text"
        placeholder="Plot Address, India."
      />
      <Input
        name="eventDescription"
        label="Event Description"
        id="event-description"
        type="text"
        placeholder="Any info about the event"
        register={register}
      />
      <Input
        name="eventFlier"
        label="Event Flier"
        id="event0flier"
        type="file"
        register={register}
      />
      <button className="bg-orange-400 hover:bg-orange-300 p-4 align-baseline w-1/2 md:w-1/5 mx-auto block md:mx-0 md:aspect-auto">
        Create
      </button>
    </form>
  );
};

export default CreateEventForm;
