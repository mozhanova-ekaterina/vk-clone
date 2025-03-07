import { RootStoreContext } from "@/stores/root.store"
import { useContext } from "react"

export const useStore = () => {
  const context = useContext(RootStoreContext)
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}