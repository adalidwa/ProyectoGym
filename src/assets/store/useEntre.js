import { create } from "zustand";
const useEntre = create((set) => ({
  setId: (newId) => set({ id: newId }), // Función para establecer el nuevo ID
}));

export default useEntre;