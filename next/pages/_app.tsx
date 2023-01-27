import type { AppProps } from 'next/app'
import style from '../styles/index.module.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <main className={style.main}>
            <Component {...pageProps} />
        </main>
        <footer className={style.footer}>
            <p>Created by <a href="https://github.com/augustinmauroy">Augustin Mauroy</a><br />Copyright © 2023 Augustin Mauroy</p>
        </footer>
        </>
    )
};
