"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  myLikedSongs: Song[];
}

function LikedContent({ myLikedSongs }: Props) {
  const router = useRouter();

  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (myLikedSongs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Liked Songs!
      </div>
    );
  }

  console.log(myLikedSongs);

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {myLikedSongs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} song={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}

export default LikedContent;
