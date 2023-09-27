import Image from "next/image";

export const Icon = ({ src }: { src: string }) => (
  <Image
    src={src}
    alt="share icon"
    width={30}
    height={30}
    className="block cursor-pointer"
  />
);
