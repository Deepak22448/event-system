import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import EmptyDashboard from "./components/EmptyDashboard";
import DashboardCard from "./components/DashboardCard";
import Link from "next/link";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return redirect("/login");
  }

  const events = await prisma.event.findMany({
    where: {
      creatorId: session.user.id,
    },
  });

  if (events.length === 0) return <EmptyDashboard />;

  return (
    <section className="my-2 w-full flex flex-col min-h-screen">
      <Link
        href="/event/create"
        className="bg-orange-400 hover:bg-orange-300 p-3 text-white rounded inline-block mx-auto shadow-xl mb-4 self-center"
      >
        Create an event ticket
      </Link>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:space-x-2 md:space-x-3 gap-y-4">
        {events.map((event) => (
          <DashboardCard key={event.id} event={event} />
        ))}
      </ul>
    </section>
  );
};

export default Dashboard;
