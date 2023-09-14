import Image from "next/image";
import React, { FC, HTMLInputTypeAttribute } from "react";

interface Props {
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  iconPath: string;
  label: string;
  autoComplete?: boolean;
}
const Input: FC<Props> = ({
  type = "text",
  id,
  name,
  iconPath,
  label,
  autoComplete = false,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="relative ">
        <Image
          src={iconPath}
          alt="an icon"
          width={30}
          height={30}
          className="absolute top-1/2 -translate-y-1/2 left-6 -translate-x-1/2 capitalize"
        />
        <input
          type={type}
          id={id}
          name={name}
          className="pl-12 border rounded outline-orange-400 py-3 w-full"
          autoComplete={!autoComplete ? "off" : "on"}
        />
      </div>
    </div>
  );
};

export default Input;
