'use client';

import { ReactNode } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { topicsAtom } from './atoms';

interface TopicsProviderProps {
  initialTopics: any[];
  children: ReactNode;
}

export function TopicsProvider({ initialTopics, children }: TopicsProviderProps) {
  useHydrateAtoms([[topicsAtom, initialTopics]]);
  return <>{children}</>;
}