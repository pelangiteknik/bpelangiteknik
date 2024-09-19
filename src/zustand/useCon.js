import { create } from 'zustand'

export const useCon = create((set) => ({
    layang: false,
    setLayang: () => set((state) => ({ layang: !state.layang })),
    // removeAllBears: () => set({ bears: 0 }),
}))