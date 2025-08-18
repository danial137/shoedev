import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    
persist(
  (set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    // removeFromCart expects an id (string | number) per types — compare directly to p.id
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
    clearCart: () => set({ cart: [] }),
  }),
  {
    name: "cart",
    storage: createJSONStorage(() => localStorage),
  }
)
);

export default useCartStore;
