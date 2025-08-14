"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Fillter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className=''>
            <span>Sort by :</span>
            <select name="sort" id="sort">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Price : Low to High</option>
                <option value="newest">Price : High to Low</option>
            </select>
        </div>
    )
}

export default Fillter