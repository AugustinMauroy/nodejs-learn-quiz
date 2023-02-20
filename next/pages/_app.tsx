import type { AppProps } from 'next/app';
import Styles from '../styles/index.module.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    const date = (startingDate: number) => {
        const date = new Date();
        const year = date.getFullYear();
        if (year > startingDate){
            return `${startingDate} - ${year}`;
        }
        return startingDate;
    };
    return (
        <>
        <main>
            <Component {...pageProps} />
        </main>
        <footer className={Styles.footer}>
            <p>Created by <a href="https://github.com/augustinmauroy">Augustin Mauroy</a><br />Copyright © {date(2023)} Augustin Mauroy</p>
        </footer>
        </>
    );
};
