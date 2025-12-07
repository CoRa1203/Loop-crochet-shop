'use client'

import { mockData } from "@/data/сartData" 
import { useParams } from "next/navigation"


export default function ProductPage(){

    const params = useParams()
    const productId = params?.productId

    const product = mockData.products.find(
    (p) => p.id.toString() === productId
  );


  if (!productId) {
  return <div>Загрузка...</div>;
}
    return (
<>
<p>{product?.title}</p>
<p>{product?.id}</p>
</>
    )
}