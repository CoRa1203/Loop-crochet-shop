
import { mockData } from '@/data/сartData'
import Link from "next/link";
import Product from "./Product";

export default function BestSellersProducts() {
     const bestSellers = mockData.products.filter((product) => product.popularity > 4.9)
    const isVisible = bestSellers.slice(0, 3)

    return (
        <div className="container gap-[--spacing-6]">
            <div className="flex justify-between items-center">
                <h2>Популярные товары</h2>
                <Link className="textSmall hover:text-[--accent-brown]" href='/bestSellers'>смотреть все</Link>
            </div>
            <div className="flex gap-6">
                {isVisible.map((product) => <Product key={product.id} {...product} />)}
            </div>
        </div>
    )
}