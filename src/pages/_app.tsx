import { globalStyle } from "@/styles/global"
import { AppProps } from "next/app"
import logoImg from '../assets/ignite-shop-logo.svg'
import { Container, Header } from "@/styles/pages/app"

globalStyle()

export default function App({ Component, pageProps }: AppProps) {


    return (
       <Container>
            <Header>
                <img src={logoImg.src} alt=""/>
            </Header>

            <Component {...pageProps} />
       </Container>
    )
}