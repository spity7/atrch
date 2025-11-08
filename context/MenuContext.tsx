"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext<any>(null);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => prev);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <MenuContext.Provider
      value={{ menuOpen, openMenu, closeMenu, setMenuOpen }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
