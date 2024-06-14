import { create } from "zustand";
const useStore = create((set) => ({
  setId: (newId) => set({ id: newId }), // Función para establecer el nuevo ID
}));

export default useStore;