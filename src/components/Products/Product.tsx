'use client'
import { useContext } from "react";
import Button from "../UI/Button";
import { contextProduct } from "@/providers/cartProductAmountProvider";
import Link from "next/link";
import Image from "next/image";
import { productType } from "@/types/productType";
import { useCart } from "@/hooks/useCart";

type FilledShoppingCartProp = productType & {
    quantity?: number;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Product({ 
  id, 
  image,
  title,
  description,
  fullPrice,
  discounPercent,
  rating, 
  quantity
   }: FilledShoppingCartProp ) {

  const ProductContext = useContext(contextProduct)
  const setProductCount = ProductContext?.setProductCount
  // const dispatchFunction = useContext(cartContex)
  // const dispatch = dispatchFunction?.dispatch
  const { dispatch } = useCart();

  // const dispatch = cartContext;


  function addToCart() {
    setProductCount?.((prev: number) => prev + 1);
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        id,
        image,
        title,
        description,
        fullPrice,
        discounPercent,
        rating,
        quantity
      },
    });
  }

  //  
  return (
    <article className="w-full">
      <Link href={`/products/${id}`}>
        <div className="h-[438px] overflow-hidden">
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
          {/* <p>{discounPercent}</p> */}
        </div>
      </Link>
      <p>{rating}</p>
      <Button onClick={addToCart}>Добавить в корзину</Button>
    </article>
  )
} 