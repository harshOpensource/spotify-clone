"use client";

import usePlayer from "@/actions/usePlayer";
import usegetSongsById from "@/hooks/useGetSongsById";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";
import PlayerContent from "./PlayerContent";

interface Props {}

function MediaPlayer({}: Props) {
  const player = usePlayer();
  const supabaseClient = useSupabaseClient();

  const { song } = usegetSongsById(player?.activeId as string);

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song?.song_path as string);

  const song_url = songData.publicUrl;

  if (!song_url || !player.activeId || !song) {
    return null;
  }

  return (
    <div className="fixed bottom-0 border-t-2 border-neutral-800 w-full bg-black py-2 h-[80px] px-4 text-white">
      <PlayerContent key={song_url} song={song} songUrl={song_url} />{" "}
    </div>
  );
}

export default MediaPlayer;
