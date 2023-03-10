import { create } from 'zustand';

export const useStore = create<{
  keyword: string;
}>((set) => ({
  keyword: '',
  setKeyword: (keyword: string) => set({ keyword }),
}));
