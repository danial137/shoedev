"use client"

import { ProductType } from "@/types"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>


      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300" />
        </div>
      </Link>


      {/* product detail */}

      <div className="flex flex-col gap-4  p-4">
        <h1 className="font-medium"> {product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* product types */}
        <div className="flex items-center gap-4 text-xs">
          {/* size */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1">
              {product.sizes.map(size => (

                <option value={size}>
                  {size.toUpperCase()}
                </option>

              ))}
            </select>
          </div>
          {/* color */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map(color => (
                <div key={color} className=''>
                  <div className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: color }} key={color} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}

export default ProductCard