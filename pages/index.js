import Head from "next/head";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className=" min-h-screen">
      <Head>
        <title>Instagram App</title>
        <meta typ />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
