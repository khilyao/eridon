"use client";
import { ReactNode } from "react";
import { useState } from "react";
import { storeContext } from "./context";

type Props = {
  children: ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const providerValue = {
    isSideBarOpen,
    setIsSideBarOpen,
  };

  return (
    <storeContext.Provider value={providerValue}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
