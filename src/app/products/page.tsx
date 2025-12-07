import Filter from "@/components/Filter/Filter"
import Product from "@/components/products/Product"
import { mockData } from "@/data/сartData"

export default function ProductPage(){
    // const allProducts = mockData.products.
    return (
         <div className="pageContainer relative container">
              {/* <h2>Популярные товары</h2> */}
              <div className="productContainer gap-[--spacing-6]">
                <Filter/>
                <div className="grid grid-cols-2 gap-[--spacing-6]">
                   {mockData.products.map((product) => <Product key={product.id} {...product}/>)}
                </div>
              </div>
            </div>
    )
}

