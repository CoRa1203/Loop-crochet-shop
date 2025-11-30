import ShoppingCart from "@/components/shoppingCart/ShoppingCart"
import ShoppingCartModal from "@/components/shoppingCart/ShoppingCartModal"
import TotalAmountInCart from "@/components/shoppingCart/TotalAmountInCart"

export default function ShoppingCartPage(){
    return ( 
  <div className="flex gap-[--spacing-6]">
      <ShoppingCart/>
   
  </div>
   
    )
}