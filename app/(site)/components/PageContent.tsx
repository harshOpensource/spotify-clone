"use client";

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";
import React from "react";

interface Props {
  songs: Song[];
}

function PageContent({ songs }: Props) {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs Available!</div>;
  }

  const onPlay = useOnPlay(songs);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4 ">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onClick={(id: string) => onPlay(id)}
        />
      ))}
    </div>
  );
}

export default PageContent;
