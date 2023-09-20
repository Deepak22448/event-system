"use client";
import { CREDENTIALS_PROVIDER_NAME } from "@/app/api/auth/[...nextauth]/authOptions";
import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}
const OAuthLoginButtons: FC<Props> = ({ providers }) => {
  const providersArray = Object.values(providers!).filter(
    (provider) =>
      provider.name.toLowerCase() !== CREDENTIALS_PROVIDER_NAME.toLowerCase()
  );

  return (
    <div className="oauth-buttons space-y-4">
      {providersArray.map((provider) => (
        <div
          key={provider.name}
          className="flex border rounded p-3 mx-auto hover:bg-gray-500 cursor-pointer"
        >
          <Image
            src={`/icons/${provider.name.toLowerCase()}.svg`}
            alt="github logo"
            width={30}
            height={30}
            className="z-[1] mr-3 ml-auto"
          />
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "/",
                redirect: true,
              })
            }
            className="mr-auto"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OAuthLoginButtons;
