'use client'

import Link from "next/link";
import { Cart, Favorite, Login, Logo, Search } from "./UI/icons";
import { useContext } from "react";
import { contextProduct } from "@/providers/cartProveder";
import Button from "./UI/Button";
import Products from "@/app/products/page";

export default function Header() {

  function onClick() {

  }
  const ProductContext = useContext(contextProduct)
  const productCount = ProductContext?.productCount
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center dark:bg-black pt-2 pb-2 bg-custom-brown">
        <p className="text-xs">Добро пожаловать в уютный уголок, где всё связано вручную — с душой, заботой и чашкой горячего какао рядом</p>
      </div>
      <div>
        <div className="flex justify-between items-center mx-auto container flex-row pt-4 pb-4 body-text-small">
          <Logo />
          <nav>
            <ul className="customFlex">
              <Link href='/' className="pl-2 pr-2 textCustom"><li>О нас</li></Link>
              <Link href='/products' className="pl-2 pr-2 textCustom"><li>Товары</li></Link>
              <Link href='/' className="pl-2 pr-2 textCustom"><li>Доставка</li></Link>
              <Link href='/' className="pl-2 pr-2 textCustom"><li>Контакты</li></Link>
            </ul>
          </nav>
          <div className="customFlex">
            <Button btnIcon onClick={onClick}><Search className="iconCustom" /></Button>
            <Button btnIcon onClick={onClick}><Login className="iconCustom" /></Button>
            <Button btnIcon onClick={onClick}><Favorite className="iconCustom" /></Button>
            <div className="relative inline-block">
              <Button btnIcon onClick={onClick}><Cart className="iconCustom" /></Button>
              {productCount >= 1 ? <p className="floatingEl">{productCount > 99 ? '99+' : productCount}</p> : ''}
              {/* {productCount > 99 ? '99+' : productCount} */}
            </div>

          </div>
        </div>
      </div>
      <div className="image-bg flex-grow relative">
        <div className="flex flex-col absolute bottom-[10%] left-[8%] gap-6">
          <div>
          <h1 className="h1">Закажи изделие своей мечты</h1>
          {/* <p className="text-2xl mb-4">По своему индивидуальному заказу или из магазина</p> */}
          </div>
          <Button>Заказать</Button>
        </div>
      </div>
    </div>
  )
}

