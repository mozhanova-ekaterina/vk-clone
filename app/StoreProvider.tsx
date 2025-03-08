'use client'
import { RootStore, RootStoreContext } from "@/stores/root.store";
import { useState } from "react";


export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [rootStore] = useState(() => new RootStore());

  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
}