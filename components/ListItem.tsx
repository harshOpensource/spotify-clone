"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import liked from "../public/liked.png";
import { FaPlay } from "react-icons/fa";

interface Props {
  image: string;
  name: string;
  href: string;
}

function ListItem({ image, href, name }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      className=" relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 cursor-pointer hover:bg-neutral-100/20 transition pr-4"
      onClick={onClick}
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={liked} alt="liked song" className="object-cover" fill />
      </div>
      <div className="font-medium truncate py-5">{name}</div>
      <div className="bg-green-500 p-4 rounded-full absolute items-center justify-center flex right-5 hover:scale-110 group-hover:opacity-100 transition duration-500 drop-shadow-md opacity-0">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}

export default ListItem;
