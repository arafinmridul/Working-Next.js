import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>This is homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        architecto, doloribus dignissimos minima aliquam amet neque asperiores
        dolorum fugit molestias!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        architecto, doloribus dignissimos minima aliquam amet neque asperiores
        dolorum fugit molestias!
      </p>
      <Link href="/players/">
        <a className={styles.btn}>See Player Listing</a>
      </Link>
    </div>
  );
}
