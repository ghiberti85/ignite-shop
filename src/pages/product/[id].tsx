import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer></ImageContainer>
            <ProductDetails>
                <h1> Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus a beatae, tempore odio maxime corrupti culpa tempora repellendus voluptatem cum at, vel iste nihil velit repudiandae assumenda quae accusamus.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}