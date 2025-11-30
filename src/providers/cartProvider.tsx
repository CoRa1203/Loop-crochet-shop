'use client'

import { productType } from "@/types/productType";
import { createContext, useReducer, useState } from "react";

type cartItem = {
  product: productType;
  quantity: number;
}

type cartList = cartItem[];


type CartAction =
  | { type: "ADD_PRODUCT"; payload: productType }
  | { type: 'INCREASE_QUANTITY'; payload: number } //будет передаваться id 
  | { type: 'DECREASE_QUANTITY'; payload: number }
  | { type: 'DELETE_PRODUCT'; payload: number }


interface CartContextType {
  products: cartList;
  dispatch: React.Dispatch<CartAction>;
}

const initialState: cartList = [];

function cartReducer(products: cartList, action: CartAction) {
  switch (action.type) {//добавляем товар
    case 'ADD_PRODUCT': {
      const existedProduct = products.find((product) => product.product.id === action.payload.id)
      if (existedProduct) {//если есть такой товар в корзине, то 
        return products.map((product) => product.product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product)
      } else {
        return [...products, { product: action.payload, quantity: 1 }]
      }
    }

    case 'INCREASE_QUANTITY': {//увеличивает кол-вотоваров на 1
      return products.map((product) => product.product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product)
    }
    case 'DECREASE_QUANTITY': {//уменьшает кол-вотоваров на 1
      const decreaseProduct = products.map((product) => product.product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product)
      return decreaseProduct.filter((product) => product.quantity > 0)
    }
    case 'DELETE_PRODUCT': {//удаляет товары из корзины
      return products.filter((product) => product.product.id !== action.payload)
    }

    // return [...products, action.payload];

    // case 'DELETE_PRODUCT': 
    //   return  [...products, action.payload];
    // {



    default:
      return products
  }
}

export const cartContext = createContext<CartContextType | null>(null)

export default function CartProvider({ children }: { children: React.ReactNode }) {
  // const [cart, setCart] = useState(null)
  const [products, dispatch] = useReducer(cartReducer, initialState)


  // {
  //   // Сначала проверяем, есть ли уже такой товар
  //   const existingItem = products.find(item => item.product.id === action.payload.id);
  //   if (existingItem) {
  //     // Если есть — увеличиваем количество
  //     return products.map(item =>
  //       item.product.id === action.payload.id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     );
  //   } else {
  //     // Если нет — добавляем новый элемент с quantity: 1
  //     return [...products, { product: action.payload, quantity: 1 }];
  //   }
  // }
  return (
    <cartContext.Provider value={{ products, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

// cartProduct = { //1 товар
//     id: number,
//     image: string,
//     title: string,
//     description: string,
//     fullPrice: number,
//     discounPercent: number,
//     rating: number,
//     categories: string[],
//     weight?: string | undefined,
// }

// cartList = [
//{
//     id: number,
//     image: string,
//     title: string,
//     description: string,
//     fullPrice: number,
//     discounPercent: number,
//     rating: number,
//     categories: string[],
//     weight?: string | undefined,
// }
//]

// type cartList = {
//     cartProduct: cartProduct[];
// }