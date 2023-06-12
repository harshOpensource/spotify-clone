"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import PlayButton from "./PlayButton";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface Props {
  song: Song;
  onClick?: (id: string) => void;
}

function SongItem({ song, onClick }: Props) {
  const imagePath = useLoadImage(song);
  if (!onClick) return;

  return (
    <div
      onClick={() => onClick(song.id)}
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
        </div>{" "}
        {/* <span className="absolute flex h-5 w-5 animate-bounce items-center justify-center inset-0 m-auto z-10">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span> */}
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
