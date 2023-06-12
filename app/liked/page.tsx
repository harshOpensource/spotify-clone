import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import liked from "../../public/liked.png";
import LikedContent from "./components/LikedContent";
import { Song } from "@/types";

interface Props {}

const revalidate = 0;

async function page({}: Props) {
  const myLikedSongs: any = await getLikedSongs();

  return (
    <div className="bg-black h-full w-full overflow-hidden overflow-y-auto border-l-2 border-neutral-800">
      <Header className="h-fit bg-gradient-to-b from-emerald-800 p-6">
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44 rounded-md">
              <Image
                fill
                src={liked}
                alt="liked_image_png"
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <div className="hidden md:block font-semibold text-sm text-neutral-400">
                Playlist
              </div>
              <div className="text-white text-4xl sm:text-5xl lg:text-5xl font-bold">
                Liked Songs
              </div>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent myLikedSongs={myLikedSongs} />
    </div>
  );
}

export default page;
