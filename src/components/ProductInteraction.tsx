"use client"

import { ProductType } from "@/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"



const ProductInteraction = ({ product, selectedColor, selectedSize }: { product: ProductType, selectedColor: string, selectedSize: string }) => {
    

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleTypeChange = (type: string , value: string) => { 
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
    
    return (
        <div className='flex flex-col gap-4 mt-4'>
            {/* size */}
            <div className="flex flex-col gap-2 text-xs">
                <span className="text-gray-500">size</span>
                <div className="flex items-center gap-2">
                    {product.sizes.map(size => (
                    
                        <div className={`cursor-pointer border-1  p-[2px] ${selectedColor===size ? "border-gray-600":"border-gray-300"}`} key={size} onClick={() => handleTypeChange("size",size)}>
                            <div className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize===size ? "bg-black text-white" : "bg-white text-black"}`}>{size.toUpperCase()}</div>
                        </div>
                   
                ))}
             </div> 
            </div>
            {/* color */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">color</span>
                {product.colors.map(color => (
                    <div className="" key={color}> {color} </div>
                ))}
            </div>
            {/* quantity */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">quantity</span>
                <div className="">1</div>
            </div>
        </div>
    )
}

export default ProductInteraction