import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated:false,
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedSize === product.selectedSize &&
              p.selectedColor === product.selectedColor
          );
          if (existingProduct !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingProduct].quantity += product.quantity || 1;
            return { cart: updatedCart };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: product.quantity || 1,
                selectedSize: product.selectedSize,
                selectedColor: product.selectedColor,
              },
            ],
          };
        }),
      // removeFromCart expects only the product id
      removeFromCart: (id: string | number) =>
        set((state) => ({
            cart: state.cart.filter((p) => !(
                p.id === id &&
                p.selectedSize === state.cart.find(item => item.id === id)?.selectedSize &&
                p.selectedColor === state.cart.find(item => item.id === id)?.selectedColor
          )),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
