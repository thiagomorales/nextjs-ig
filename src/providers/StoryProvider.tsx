/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import React, { createContext, useContext } from 'react';

import { StoryStore } from '../stores';

let store: StoryStore;
export const StoreContext = createContext<StoryStore | undefined>(undefined);

export function useStoryProvider() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within StoryProvider');
  }

  return context;
}

function initializeStore(initialData = null) {
  const _store = store ?? new StoryStore();

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function StoreProvider({
  children,
  initialState: initialData,
}: {
  children: any;
  initialState: any;
}) {
  const storeValue = initializeStore(initialData);

  return <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>;
}
