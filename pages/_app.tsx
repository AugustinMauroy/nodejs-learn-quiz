import type { AppProps } from 'next/app';
import Styles from '../styles/index.module.scss';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const date = (startingDate: number): string => {
        const date = new Date();
        const year = date.getFullYear();
        if (year > startingDate){
            return `${startingDate} - ${year}`;
        }
        return startingDate.toString();
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
