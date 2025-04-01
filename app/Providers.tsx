"use client";

import { RootStore, RootStoreContext } from "@/stores/root.store";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [rootStore] = useState(() => new RootStore());

  return (
    <SessionProvider>
      <RootStoreContext.Provider value={rootStore}>
        {children}
      </RootStoreContext.Provider>
    </SessionProvider>
  );
}

//Правило: Чем более "фундаментальный" провайдер, тем выше он должен находиться в иерархии. 
//Обычный порядок приоритета:
//Session/Аутентификация
//Состояние приложения (MobX/Redux)
//Стили (ThemeProvider)
//Специфические контексты (модалки, туры и т.д.)
