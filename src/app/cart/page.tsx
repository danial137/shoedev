"use client"

import { CartItemsType } from "@/types"
import { useRouter, useSearchParams } from "next/navigation"
const steps = [
    { id: 1, title: "Shopping Cart", content: "Review your items" },
    { id: 2, title: "Shipping Information", content: "Enter your address" },
    { id: 3, title: "Payment", content: "Enter your payment details" },
]


const cartItems: CartItemsType = [
    {
        id: 1,
        name: "Adidas CoreFit T-Shirt",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
        quantity: 1,
        selectedSize: "s",
        selectedColor: "gray",
    },
    {
        id: 2,
        name: "Puma Ultra Warm Zip",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 59.9,
        sizes: ["s", "m", "l", "xl"],
        colors: ["gray", "green"],
        images: {
            gray: "/products/2g.png", green: "/products/2gr.png"

        },

        quantity: 2,
        selectedSize: "m",
        selectedColor: "green",
    },

    {
        id: 3,
        name: "Nike Air Essentials Pullover",
        shortDescription:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        description:
            "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
        price: 69.9,
        sizes: ["s", "m", "l"],
        colors: ["green", "blue", "black"],
        images: {
            green: "/products/3gr.png",
            blue: "/products/3b.png",
            black: "/products/3bl.png",
        },
        quantity: 3,
        selectedSize: "l",
        selectedColor: "black",
    },
]

const CartPage = () => {

    const searchParms = useSearchParams()
    const router = useRouter()

    const activeStep = parseInt(searchParms.get("step") || "1")

    return (
        <div className='flex flex-col gap-8 items-center justify-center mt-12'>
            {/* title */}
            <h1 className="text-2xl font-medium">Your shopping cart</h1>
            {/* steps */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {steps.map(step => (
                    <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`} key={step.id}>
                        <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id===activeStep? "bg-gray-800" : "bg-gray-200"}`}> {step.id}

                        </div>
                        <p className={`text-sm`}>{step.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartPage