"use client";

import { MyUserConTextProvider } from "@/hooks/useUser";

interface Props {
  children: React.ReactNode;
}

function UserProvider({ children }: Props) {
  return <MyUserConTextProvider>{children}</MyUserConTextProvider>;
}

export default UserProvider;
