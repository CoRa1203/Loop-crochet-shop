import Product from "@/components/products/Product"
import { mockData } from "@/data"

export default function BestSellersPage() {

  const bestSellersList = mockData.products.filter((product) => product.categories.includes('popular'))

  return (
    <div className="pageContainer container">
        <h2>Популярные товары</h2>
      <div className="productContainer">
        {bestSellersList.map((product) => <Product key={product.id} {...product} />)}
      </div>
    </div>
  )
}