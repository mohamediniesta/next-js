import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <style jsx>{`
          h1 {
            font-size: 3rem;
            color: red;
          }
        `}</style>
      </Head>
      ;<h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
};

export default Home;
