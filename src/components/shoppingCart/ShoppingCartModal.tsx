'use client'

import Button from "../UI/Button";
import { useCart } from "@/hooks/useCart";
import { Close } from "../UI/icons";
import EmptyShoppingCart from "./EmptyShoppingCart";
import FilledShoppingCart from "./FiiledShoppingCart";

interface ShoppingCartType {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    close?: boolean
}

export default function ShoppingCartModal({ onClick }: ShoppingCartType) {

    const { products } = useCart();


    return (
        //TODO сделать появление корзины в мини формате при наведении на корзину, а при клике открытие полного формата корзины
        <div className="flex flex-col items-center w-full h-[64.5vh] bg-[--background-80] backdrop-blur-md absolute right-0 top-[62px] z-10 pb-[--spacing-6] px-[--spacing-5] gap-[--spacing-6] overflow-y-auto">
            <div className="w-full flex-1">
                <Button onClick={onClick} btnIcon className="w-full flex justify-end mb-[--spacing-8] pt-[--spacing-6] sticky top-0 z-50 ">
                    <Close />
                </Button>
                {products.length === 0 ? (<EmptyShoppingCart />) : (<div className="flex flex-col gap-[--spacing-8]">
                    {products.map((product) => <FilledShoppingCart key={product.product.id} {...product.product} quantity={product.quantity} />)}
                </div>)}
            </div>
            {products.length !== 0 && <Button className="flex-shrink-0">Перейти к покупкам</Button>}
        </div>
    )
}



