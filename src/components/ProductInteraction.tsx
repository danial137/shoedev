"use client"

import { ProductType } from "@/types"



const ProductInteraction = ({ product, selectedColor, selectedSize }: { product: ProductType, selectedColor: string, selectedSize: string }) => {
    return (
        <div className='flex flex-col gap-4 mt-4'>
            {/* size */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">size</span>
                <div className="flex items-center gap-2">
                    {product.sizes.map(size => (
                    
                        <div className={`cursor-pointer border-1 ${selectedColor===size ? "border-gray-600":"border-gray-300"}`} key={size}>
                            <div>{size}</div>
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