import Link from "next/link";
import Button from "../UI/Button";
import { Decrease, Delete, Increase } from "../UI/icons";
import { productType } from "@/types/productType";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import ModalHeader from "../Modal/ModalHeader";

type FilledShoppingCartProp = productType & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    quantity: number;
}

//TODO возможно онклик вообще оставить в рамках этого компонента
export default function FilledShoppingCart({ id,
    image,
    title,
    description,
    fullPrice,
    discounPercent,
    quantity
}: FilledShoppingCartProp) {

    const { products, dispatch } = useCart();

    function deleteProduct() {
        dispatch({
            type: 'DELETE_PRODUCT',
            payload: id,
        })
    }
    function increaseProduct(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        dispatch({
            type: 'INCREASE_QUANTITY',
            payload: id
        })
    }
    function decreaseProduct(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        dispatch({
            type: 'DECREASE_QUANTITY',
            payload: id
        })
    }
    return (
       
            <article className="flex w-full flex-row">
                <div className="flex flex-1 gap-[--spacing-2]">
                    <Link href='/productCart'>
                        <div className="w-[142px] h-[163px] overflow-hidden">
                            <Image
                                src={image}
                                width={142}
                                height={163}
                                alt={title}
                                className=" h-full object-cover"
                            />
                        </div>
                    </Link>
                    <div className="flex flex-col gap-[--spacing-2] items-start">
                        <Link href='/productCart'>
                            <h5 className="pb-[--spacing-2]">{title}</h5>
                        </Link>
                        <div className="flex-grow">
                            <p>{description}</p>
                        </div>
                        <div className="inline-flex items-center bg-[--accent-brown-20] gap-[--spacing-2]">
                            <Button btnIcon onClick={decreaseProduct} ><Decrease /></Button>
                            <p>{quantity}</p>
                            <Button btnIcon onClick={increaseProduct}><Increase /></Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-between shrink-0">
                    <Button btnIcon onClick={deleteProduct}><Delete /></Button>
                    <div className="flex flex-col items-end font-[--font-weight-bold]">
                        <p className="whitespace-nowrap">{fullPrice} Р</p>
                        <p className="whitespace-nowrap text-[--text-tertiary-grey]">{discounPercent}</p>
                    </div>
                </div>
            </article>

    )
}