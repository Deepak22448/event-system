"use client";
import { useRouter } from "next/navigation";
import { FC, FormEvent } from "react";
import { toast } from "react-toastify";

interface Props {
  title: string;
  creatorEmail: string;
  eventId: string;
}
const RegisterForm: FC<Props> = ({ title, creatorEmail, eventId }) => {
  const router = useRouter();
  const handleRegisterEvent = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await fetch(`/api/event/${eventId}/register`, {
        method: "POST",
        cache: "no-store",
      });

      toast.success("Registered in the event.");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form
      className="flex flex-col space-y-4 justify-center items-center min-h-screen"
      onSubmit={handleRegisterEvent}
    >
      <h1>
        Register in the Event : <span className="underline">{title}</span> by{" "}
        {creatorEmail}
      </h1>
      <button className="bg-orange-500 hover:bg-orange-400 p-4 text-white rounded">
        REGISTER
      </button>
    </form>
  );
};

export default RegisterForm;
