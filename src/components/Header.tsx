'use client'

import Link from "next/link";
import { Cart, Favorite, Login, Logo, Search } from "./UI/icons";
import { useState } from "react";
import Button from "./UI/Button";
import ShoppingCartModal from "./shoppingCart/ShoppingCartModal";
import { useCart } from "@/hooks/useCart";

export default function Header() {
  const [shoppingCartIsVisible, setShoppingCartIsVisible] = useState(false);

  const { products } = useCart();

  function onClick() {

  }
  // const ProductContext = useContext(contextProduct)
  // const productCount = ProductContext?.productCount
  return (
    <div className="sticky top-0 z-50 bg-[--background-80] backdrop-blur-md py-[--spacing-4]">
      <div className="container relative mx-auto flex-row items-center justify-between">
        <Link href='/'>
          <Logo />
        </Link>
        <nav>
          <ul className="flex gap-[--spacing-5]">
            <Link href='/' className="pl-2 pr-2 textCustom"><li>О нас</li></Link>
            <Link href='/products' className="pl-2 pr-2 textCustom"><li>Товары</li></Link>
            <Link href='/' className="pl-2 pr-2 textCustom"><li>Доставка</li></Link>
            <Link href='/' className="pl-2 pr-2 textCustom"><li>Контакты</li></Link>
          </ul>
        </nav>
        <div className="flex gap-[--spacing-4]">
          <Button btnIcon onClick={onClick}><Search /></Button>
          <Button btnIcon onClick={onClick}><Login /></Button>
          <Button btnIcon onClick={onClick}><Favorite /></Button>
          <div className="relative inline-block">

            <Button btnIcon onClick={() => setShoppingCartIsVisible(true)}><Cart /></Button>
            {/*//TODO сделать проверку на уникальность*/}
            {products.length >= 1 ? <p className="floatingEl">{products.length > 99 ? '99+' : products.length}</p> : ''}
            {/* {productCount > 99 ? '99+' : productCount} */}
          </div>
        </div>
        {shoppingCartIsVisible && <ShoppingCartModal onClick={() => setShoppingCartIsVisible(false)} />}
      </div>
    </div>
  )
}

