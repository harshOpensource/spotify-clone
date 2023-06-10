import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <div className="text-white text-3xl font-semibold mb-4">
            Welcome Back!
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            <ListItem image="../public/liked.png" href="/" name="Liked Songs" />
          </div>
        </div>
      </Header>
      {/*  */}
      <div className="mt-2 mb-7 px-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">Newest Songs</div>
        </div>
        <div>List Of Songs!</div>
      </div>
    </div>
  );
}
