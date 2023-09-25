import { Prisma, prisma } from "@/prisma/db";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  attendees: Prisma.EventGetPayload<{
    include: { attendees: true };
  }>["attendees"];
}
const AttendeesTable: FC<Props> = ({ attendees }) => {
  return (
    <table className="w-full text-sm text-left border">
      <thead className="text-base border bg-orange-200 hover:bg-orange-100">
        <tr>
          <th scope="col" className="px-6 py-3">
            Picture
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {attendees.map(({ email, name, image }) => (
          <tr className="bg-white border-b hover:bg-gray-200" key={email}>
            <td className="px-6 py-4">
              <Image
                src={image}
                width={50}
                height={50}
                alt={`${name}-${email}`}
                className="object-contain rounded-full"
              />
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowra capitalize"
            >
              {name}
            </td>
            <td className="px-6 py-4">{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendeesTable;
