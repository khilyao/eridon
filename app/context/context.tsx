import { createContext } from "react";

interface StoreContextType {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const storeContext = createContext<StoreContextType>(
  {} as StoreContextType
);
