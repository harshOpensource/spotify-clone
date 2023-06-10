"use client";

import AuthModal from "@/components/AuthModal";
import React, { useEffect, useState } from "react";

interface Props {}

function ModalProvider({}: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <AuthModal />
    </div>
  );
}

export default ModalProvider;
