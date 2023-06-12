"use client";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: any;
  onClick?: () => void;
}

function Button({ children, className, disabled, type, onClick }: Props) {
  return (
    <button
      type={type}
      className={twMerge(
        `w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition text-black`,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
