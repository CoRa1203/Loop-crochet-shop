import ProductsInCart from "../products/ProductsInCart";
import Button from "../UI/Button";
import TotalAmountInCart from "./TotalAmountInCart";

export default function ShoppingCart() {
    return (
        <div className="pageContainer container  gap-[--spacing-6] ">
            <div className="customCenterFlex justify-between">
                <div className="customCenterFlex gap-[--spacing-5]">
                    <Button btnIcon className="text-[--text-tertiary-grey]">Назад</Button>
                    <h2>Ваша корзина</h2>
                </div>
                <Button btnIcon className="text-[--text-tertiary-grey]">Вернуться к покупкам</Button>
            </div>
            <div className="flex gap-[--spacing-6]">
                <ProductsInCart />
                <TotalAmountInCart />
            </div>
        </div>
    )
}