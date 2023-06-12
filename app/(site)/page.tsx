import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { useState } from "react";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  console.log(songs);
  return (
    <div className="bg-black h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <div className="text-white text-3xl font-semibold mb-4">
            Welcome Back!
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            <ListItem
              image="../public/liked.png"
              href="/liked"
              name="Liked Songs"
            />
          </div>
        </div>
      </Header>
      {/*  */}
      <div className="mt-2 mb-7 px-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">Newest Songs</div>
        </div>
        <div>
          <PageContent songs={songs} />
        </div>
      </div>
    </div>
  );
}
