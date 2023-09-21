import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return <div>Dashboard</div>;
};

export default Dashboard;
