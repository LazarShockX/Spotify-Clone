import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
    ids: [],
    activeId: undefined,
    setId: (id: string) => ({ activeId: id }),
    setIds: (ids: string[]) => ({ ids: ids }),
    reset: () => set({ ids: [], activeId: undefined }),
}));

export default usePlayer;