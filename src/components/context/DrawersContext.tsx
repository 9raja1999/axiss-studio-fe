'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import DrawerRenderer from '@/components/functional/Drawers/DrawerRenderer';
import type { DrawerName, DrawerPayloadMap } from '@/types';

// -------------------- TYPES --------------------

type DrawerState<T extends DrawerName = DrawerName> = {
  name: T | null;
  payload: T extends DrawerName ? DrawerPayloadMap[T] | null : null;
};

type DrawersContextType = {
  drawer: DrawerState;
  openDrawer: <T extends DrawerName>(name: T, payload?: DrawerPayloadMap[T]) => void;
  closeDrawer: () => void;
  isOpen: boolean;
};

// -------------------- CONTEXT --------------------

const DrawersContext = createContext<DrawersContextType | null>(null);

// -------------------- PROVIDER --------------------

export function DrawersProvider({ children }: { children: ReactNode }) {
  const [drawer, setDrawer] = useState<DrawerState>({
    name: null,
    payload: null,
  });

  const openDrawer = useCallback(<T extends DrawerName>(name: T, payload?: DrawerPayloadMap[T]) => {
    setDrawer({ name, payload: payload ?? null });
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawer({ name: null, payload: null });
  }, []);

  return (
    <DrawersContext.Provider
      value={{
        drawer,
        openDrawer,
        closeDrawer,
        isOpen: drawer.name !== null,
      }}
    >
      {children}

      {/* ✅ Drawer Renderer inside same context */}
      <DrawerRenderer />
    </DrawersContext.Provider>
  );
}

export function useDrawers() {
  const ctx = useContext(DrawersContext);
  if (!ctx) throw new Error('useDrawers must be used inside DrawersProvider');
  return ctx;
}
