import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Box({ children, className }: Props) {
  return (
    <div className={twMerge(`bg-black rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  );
}

export default Box;
