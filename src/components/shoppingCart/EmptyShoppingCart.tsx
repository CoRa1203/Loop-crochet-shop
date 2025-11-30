import Link from "next/link";
import Button from "../UI/Button";


export default function EmptyShoppingCart() {
    return (
        <div className="flex flex-col items-center gap-[--spacing-16] pt-[--spacing-6]">
            <div className="flex flex-col items-center gap-[--spacing-5]">
                <h4>В корзине ничего нет</h4>
                <p>Добавьте товары</p>
            </div>

            <div className="flex flex-col gap-[--spacing-5]">
                <Link href='/Products'>
                <Button>
                    Наш магазин
                </Button>
</Link>
                <Link href='/BestSellers'>
                    <Button>
                        Популярные товары
                    </Button>
                </Link>
            </div>
        </div>
    )
}