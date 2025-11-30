
import BestSellersProducts from "@/components/products/BestSellersProducts";
import Button from "@/components/UI/Button";
import WelcomeBlock from "@/components/UI/WelcomeBlock";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <WelcomeBlock />
      <main className="flex flex-col container mx-auto gap-20 mt-20 mb-12">
        <BestSellersProducts />
        <Link href='/shoppingCart'>корзина</Link>
      </main>
    </>
  );
}
