export type productType = {
  id: number;
  image: string;
  title: string;
  description: string;
  fullPrice: number;
  discounPercent: number;
  rating: number;
  categories: string[];
  weight?: string;
}

export type cartItem = {
  product: productType;
  quantity: number;
}

export type cartList = cartItem[];


export type CartAction =
  | { type: "ADD_PRODUCT"; payload: productType }
  | { type: 'INCREASE_QUANTITY'; payload: number } //будет передаваться id 
  | { type: 'DECREASE_QUANTITY'; payload: number }
  | { type: 'DELETE_PRODUCT'; payload: number }


export interface CartContextType {
  products: cartList;
  dispatch: React.Dispatch<CartAction>;
}