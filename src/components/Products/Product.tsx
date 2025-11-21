'use client'
import { useContext } from "react";
import Button from "../UI/Button";
import { contextProduct } from "@/providers/cartProveder";
import Link from "next/link";
import Image from "next/image";
import { productType } from "@/types/productType";

export default function Product({ image,
  title,
  description,
  fullPrice,
  discounPercent,
  rating, }: productType) {

  const ProductContext = useContext(contextProduct)
  const setProductCount = ProductContext?.setProductCount

  function addProduct() {
    setProductCount?.((prev: number) => prev + 1)
  }


  return (
    <article className="productCart">
      <Link href='/productCart'>
        <div className="w-[392px] h-[438px] overflow-hidden">
          <Image
            src={image}
            width={392}
            height={586}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3>{title}</h3>
        <p className="cartDesc">{description}</p>
        <div className="flex gap-[--spacing-1]">
          <p className="">{fullPrice}</p>
          <p>{discounPercent}</p>
        </div>

        <p>{rating}</p>
      </Link>
       <Button onClick={addProduct}>Добавить в корзину</Button>
    </article>
  )
} 