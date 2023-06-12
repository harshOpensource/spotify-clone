"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  song: Song;
  onClick?: (id: string) => void;
}

function MediaItem({ song, onClick }: Props) {
  const handleClick = () => {};

  const imageUrl = useLoadImage(song);

  return (
    <div
      onClick={handleClick}
      className="
    flex 
    items-center 
    gap-x-3 
    cursor-pointer 
    hover:bg-neutral-800/50 
    w-full 
    p-2 
    rounded-md
  "
    >
      <div
        className="
      relative 
      rounded-md 
      min-h-[48px] 
      min-w-[48px] 
      overflow-hidden
    "
      >
        <Image
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">By {song.author}</p>
      </div>
    </div>
  );
}

export default MediaItem;
