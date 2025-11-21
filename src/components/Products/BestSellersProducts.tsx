import Product from "./Product";

import { productType } from "@/types/productType";
import { mockData } from '@/data'
import Link from "next/link";

export default function BestSellersProducts() {
    const bestSellers = mockData.products.filter((product) => product.categories.includes('new'))

    const isVisible = bestSellers.slice(0, 3)

    return (
        <div className="container gap-6">
            <div className="flex justify-between items-center">
                <h2>Популярные товары</h2>
                <Link className="textSmall hover:text-[--accent-brown]" href='/BestSellers'>смотреть все</Link>
            </div>
            <div className="flex gap-6">
                {isVisible.map((bestSellers) => <Product key={bestSellers.id} {...bestSellers} />)}
            </div>
        </div>
    )
}