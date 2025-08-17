import { z } from "zod";
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email().min(1, "Email is required").max(100),
  phone: z
    .string()
    .min(7, "number must be between 7 and 10 ")
    .max(10, "number must be between 7 and 10 ")
    .regex(/^\d+$/, "phone number must contain only numbers!"),
  address: z.string().min(1, "adress is required").max(200),
  city: z.string().min(1, "city is required").max(100),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card Holder is required").max(100),
  cardNumber: z.string().min(16, "Card Number is required").max(100),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY!"),
  cvv: z.string().min(3, "cvv is required").max(3, "cvv is required"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
