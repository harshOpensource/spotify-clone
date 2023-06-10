"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch, BiLibrary } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { Icons } from "@/utils/Icons";
import Library from "./Library";

interface Props {
  children: React.ReactNode;
}

function Sidebar({ children }: Props) {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathName !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathName === "/search",
        href: "/search",
        icon: BiSearch,
      },
      /* {
        label: "Your Library",
        active: pathName === "/library",
        href: "/library",
        icon: BiLibrary,
      }, */
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[280px]">
        <Box className="flex flex-col gap-y-3 py-6">
          <Icons.spotify className="h-10 text-white flex w-3/5" />
          <div className="mt-3">
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
                Icon={item.icon}
                label={item.label}
              />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto bg-gray-800">
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
