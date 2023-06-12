"use client";
import React from "react";
import Image from "next/image";
import { Icons } from "@/utils/Icons";
import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import liked from "../public/liked.png";

interface Props {
  Icon?: IconType;
  label: string;
  active?: boolean;
  href: string;
}

function SidebarItem({ Icon, href, active, label }: Props) {
  if (!Icon) {
    return (
      <Link
        href={href}
        className={twMerge(
          `flex flex-row h-auto items-center w-full gap-x-2 text-base font-medium cursor-pointer hover:text-white transition text-neutral-400 py-2 my-[1px] mx-5`,
          active && "text-white"
        )}
      >
        <div className="relative h-9 w-10">
          <Image
            alt="liked"
            src={liked}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="truncate w-full text-base font-medium">{label}</div>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-2 text-base font-medium cursor-pointer hover:text-white transition text-neutral-400 py-2 my-[1px] mx-5`,
        active && "text-white"
      )}
    >
      <Icon size={29} />
      <div className="truncate w-full text-base font-medium ml-3">{label}</div>
    </Link>
  );
}

export default SidebarItem;
