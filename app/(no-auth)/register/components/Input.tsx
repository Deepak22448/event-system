import { register } from "module";
import Image from "next/image";
import React, { HTMLInputTypeAttribute, FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  iconPath?: string;
  label: string;
  autoComplete?: boolean;
  register: UseFormRegister<any>;
  isRequired?: boolean;
  error?: string | undefined;
  placeholder?: string;
}
const Input: FC<Props> = ({
  type = "text",
  id,
  name,
  iconPath,
  label,
  autoComplete = false,
  register,
  isRequired = false,
  placeholder,
  error,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id}>
        {isRequired && "*"}
        {label}
        {!isRequired && (
          <span className="text-gray-400 ml-2">{"(Optional)"}</span>
        )}
      </label>
      <div className="relative ">
        {iconPath && (
          <Image
            src={iconPath}
            alt="an icon"
            width={30}
            height={30}
            className="absolute top-1/2 -translate-y-1/2 left-6 -translate-x-1/2 capitalize"
          />
        )}

        <input
          {...register(name, { required: isRequired })}
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          className={` ${
            iconPath ? "pl-12" : "pl-2"
          } border rounded outline-orange-400 py-3 w-full`}
          autoComplete={!autoComplete ? "off" : "on"}
        />
      </div>
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

export default Input;
