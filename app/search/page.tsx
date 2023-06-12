import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import React from "react";
import SearchContent from "./components/SearchContent";

interface Props {
  searchParams: {
    title: string;
  };
}

async function page({ searchParams }: Props) {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <div className="bg-black h-full w-full overflow-hidden overflow-y-auto border-l-2 border-neutral-800">
      <Header className="h-fit bg-gradient-to-b from-emerald-800 p-6">
        <div className="mb-2 flex flex-col gap-y-6">
          <div className="text-white text-3xl font-semibold">Search</div>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
}

export default page;
