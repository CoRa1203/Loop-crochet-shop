'use client'
import { useCart } from "@/hooks/useCart"
import FilledShoppingCart from "../shoppingCart/FiiledShoppingCart"

export default function ProductsInCart(){
const {products} = useCart()

    return (
        <div className="flex flex-col w-[70%] gap-[--spacing-8]">
           {products.map((product) => <FilledShoppingCart key={product.product.id} {...product.product} quantity={product.quantity} />)}
        </div>
    )
}