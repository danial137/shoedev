import {z} from 'zod';
export type ProductType = {
    id: string | number
    name: string
    shortDescription: string
    description: string
    price: number
    sizes: string[]
    colors: string[]
    images: Record<string, string>
};

export type ProductsType = ProductType[];


export type CartItemType = ProductType & {
    quantity: number
    selectedSize: string
    selectedColor: string
};

export type CartItemsType = CartItemType[]


export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email().min(1, "Email is required").max(100),
  phone: z.string().min(7, "number must be between 7 and 10 ").max(10, "number must be between 7 and 10 ").regex(/^\d+$/, "phone number must contain only numbers!"),
  address: z.string().min(1, "adress is required").max(200),
  city: z.string().min(1, "city is required").max(100),
 
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;