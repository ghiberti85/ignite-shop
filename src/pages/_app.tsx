import { globalStyle } from "@/styles/global"
import { AppProps } from "next/app"

globalStyle()

export default function App({ Component, pageProps }: AppProps) {


    return <Component {...pageProps} />
}