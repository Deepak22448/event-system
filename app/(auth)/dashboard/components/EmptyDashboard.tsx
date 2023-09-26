import Image from "next/image";
import Link from "next/link";

const EmptyDashboard = () => {
  return (
    <section className="relative min-h-screen">
      <figure className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center flex-col space-y-3">
        <Image
          src={"/images/dashboard.svg"}
          width={300}
          height={300}
          alt="ilstrations with baloon"
        />
        <figcaption>You have no existing event tickets.</figcaption>
        <Link
          href="/event/create"
          className="bg-orange-400 p-4 rounded text-xl hover:bg-orange-300"
        >
          Create an event ticket
        </Link>
      </figure>
    </section>
  );
};

export default EmptyDashboard;
