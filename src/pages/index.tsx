import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import shirt1 from '../assets/products/1.png';
import shirt2 from '../assets/products/2.png';
import shirt3 from '../assets/products/3.png';
import shirt4 from '../assets/products/4.png';


export default function Home() {
    return (
        <HomeContainer>
            <Product>
                <Image src={shirt1} width={520} height={480} alt=""/>
                <footer>
                    <strong>Camiseta X</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>
            <Product>
                <Image src={shirt2} width={520} height={480} alt=""/>
                <footer>
                    <strong>Camiseta Y</strong>
                    <span>R$ 99,90</span>
                </footer>
            </Product>
        </HomeContainer>
    )
}