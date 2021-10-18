import Head from "next/head";
import Header from "../components/Header";
import Feed from '../components/Feed'
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram App</title>
        <meta typ />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed/>
    </div>
  );
}
