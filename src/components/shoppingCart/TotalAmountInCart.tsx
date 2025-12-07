import Link from "next/link";
import Button from "../UI/Button";

export default function TotalAmountInCart() {
    return (
        <div className="w-[30%]">
            <p>Сумма без скидки</p>
            <p>Сумма со скидкой</p>
            <p>Сумма без скидки</p>
            <Link href='/payment'>
            <Button className="w-full">Оплатить</Button>
            </Link>
        </div>
    )
}