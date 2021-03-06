import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Products from "../components/products";
import Sidebar from "../components/sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <Sidebar />
        <Products />
      </main>

      <footer className={styles.footer}>©2022 Binmile. All rights reserved</footer>
    </div>
  );
}
