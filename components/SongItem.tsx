"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import PlayButton from "./PlayButton";

interface Props {
  song: Song;
  onClick?: (id: string) => void;
}

function SongItem({ song, onClick }: Props) {
  const imagePath = useLoadImage(song);
  return (
    <div
      onClick={() => {}}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer transition p-3 hover:bg-neutral-400/10"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          src={imagePath || "../public/liked.png"}
          alt="song_image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <div className="font-semibold truncate w-full">{song.title}</div>
        <div
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
          By {song.author}
        </div>
      </div>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
}

export default SongItem;
