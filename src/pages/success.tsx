import Link from "next/link"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"


export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra Efetuada!</h1>

            <ImageContainer>
                
            </ImageContainer>

            <p>
                Uhu! <strong>Fernando Ghiberti</strong>, sua <strong>Camiseta NLW</strong> já está a caminho da sua casa.
            </p>

            <Link href="/">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}