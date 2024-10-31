import { atom } from 'jotai';

interface Topic {
  _id: string;
  title: string;
  content?: string;
  user_name?: string;
  created_at?: string;
}

export const topicsAtom = atom<Topic[]>([]);