'use client'

import { createContext, useState } from "react"

type ProductContext = {
    productCount: number | null;
    setProductCount: (productCount: number) => void
}

const countDafault = 105
export const contextProduct = createContext<ProductContext | undefined>(undefined);

export default function ProviderProduct({ children }: {children: React.ReactNode}) {
    const [productCount, setProductCount] = useState<number>(0)

    return (
        <contextProduct.Provider value={{ productCount, setProductCount }}>
            {children}
        </contextProduct.Provider>
    )
}