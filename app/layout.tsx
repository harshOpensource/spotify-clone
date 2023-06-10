import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import SupabaseProviders from "@/providers/SupabaseProviders";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to the latest Music!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProviders>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProviders>
      </body>
    </html>
  );
}
