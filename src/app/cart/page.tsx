"use client"

import { CartItemsType } from "@/types"
import { ArrowRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
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


const CartPageContent = () => {
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
                        <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-200"}`}> {step.id}
                        </div>
                        <p className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}>{step.title}</p>
                    </div>
                ))}
            </div>
            {/* Steps and datails */}
            <div className="w-full flex flex-col lg:flex-row gap-16 ">
                {/* {steps} */}
                <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 rounded-lg p-8 flex flex-col gap-8"></div >
                {/* deatails */}
                <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 rounded-lg flex flex-col p-8 gap-8 ">
                    <h2 className="font-semibold">Cart Details </h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <p className=" text-gray-500">Subtotal</p>
                            <p className=" font-medium">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className=" text-gray-500">Discount(10%)</p>
                            <p className=" font-medium">$ 10</p>
                        </div>
                        <div className="flex justify-between">
                            <p className=" text-gray-500">Shipping Fee</p>
                            <p className=" font-medium">$10</p>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="flex justify-between">
                            <p className=" text-gray-800 font-semibold">Total Number</p>
                            <p className=" font-medium">
                                $
                                {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                            </p>
                        </div>
                    </div>
                    <button onClick={() => router.push("/checkout")} className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                        Continue
                        <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    )
}

const CartPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <CartPageContent />
    </Suspense>
)

export default CartPage