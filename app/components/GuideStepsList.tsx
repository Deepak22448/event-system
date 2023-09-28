import Image from "next/image";
import { FC } from "react";

import React from "react";

interface IGuidStep {
  title: string;
  desc: string;
  imgUrl: string;
}
const steps: IGuidStep[] = [
  {
    title: "Create an account",
    desc: "It is quick and hassle-free – get started in just a few simple steps!",
    imgUrl: "/Images/guide_step_1.svg",
  },
  {
    title: "Add an upcoming event",
    desc: "Create and manage your memorable events using EvenTiz sldfjsldfj kdflsjdf sdlfksj ldfksj lfksj lfjs kdfjs lf slkd ",
    imgUrl: "/Images/guide_step_2.svg",
  },
  {
    title: "Share your events",
    desc: "Share your ticketing link with friends, they register and get their tickets, and you manage attendees.",
    imgUrl: "/Images/guide_step_3.svg",
  },
];
const GuideStepsList = () => {
  return (
    <div className="bg-black space-y-7">
      {steps.map((step, index) => (
        <GuideItem data={step} stepNumber={index + 1} key={step.title} />
      ))}
    </div>
  );
};

export default GuideStepsList;

interface IGuideItemProps {
  data: IGuidStep;
  stepNumber: number;
}
const GuideItem: FC<IGuideItemProps> = ({ stepNumber, data }) => {
  const { title, desc, imgUrl } = data;

  return (
    <article className="text-black bg-amber-100 mx-6 md:mx-16 rounded p-5 flex justify-center items-center ">
      <div className="space-y-2 w-full text-center md:flex md:justify-between md:items-center md:px-10">
        <div className="md:max-w-md space-y-2 md:flex md:justify-center md:items-center">
          <div className="h-12 aspect-square rounded-full bg-orange-400 flex justify-center items-center mx-auto  md:mr-3">
            <span>{stepNumber}</span>
          </div>

          <div className="md:text-start">
            <h4 className="font-extrabold text-xl">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        </div>

        <figure className="">
          <Image
            width={300}
            height={300}
            src={imgUrl}
            alt="guide step"
            className="mx-auto"
          />
        </figure>
      </div>
    </article>
  );
};
