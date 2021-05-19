import styles from "./layout.module.scss"
import Head from 'next/head'
import Nav from './Nav'
export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <Head>
               <title>Crown Clothing || Choose You Love</title>
               <meta name="description" content="Generated by create next app" />
               <link rel="icon" href="/favicon.svg" />
            </Head>
            <Nav/>
            <main className={styles.main}>{props.children}</main>
        </div>
    )
}
