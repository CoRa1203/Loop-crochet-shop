import Filter from "@/components/Filter/Filter"
import Product from "@/components/products/Product"
import { mockData } from "@/data/сartData"

export default function BestSellersPage() {

  const bestSellersList = mockData.products.filter((product) => product.popularity > 4.9)

  return (
    <div className="pageContainer relative container">
      <h2>Популярные товары</h2>
      <div className="productContainer gap-[--spacing-6]">
        <Filter />
        <div className="grid grid-cols-2 gap-[--spacing-6]">
          {bestSellersList.map((product) => <Product key={product.id} {...product} />)}
        </div>
      </div>
    </div>
  )
}