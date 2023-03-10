import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-home  min-h-screen md:overflow-hidden  pb-20">
        <Navbar />
        <section
          className="flex flex-col lg:flex-row items-center lg:items-end justify-between max-w-7xl mx-auto px-4 md:px-40 pt-40 lg:pt-60
        "
        >
          <div
            className="md:w-1/2  md:text-left space-y-8 text-center -mt-28
            "
          >
            <p
              className="text-indigo-100  text-3xl lg:text-4xl tracking-wider uppercase
            "
            >
              SO, YOU WANT TO TRAVEL TO
            </p>
            <span
              className="text-4xl md:text-9xl text-white mt-5 mb-10 tracking-widest md:mt-10
            "
            >
              SPACE
            </span>
            <p
              className="text-gray-400 md:w-3/4 mt-10 max-w-md 
            "
            >
              Let&#39;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div
            className="explore bg-white rounded-full w-48 h-48 flex items-center justify-center mr-[15rem]  md:w-60 md:h-60 
            cursor-pointer  md:mx-0 mt-10 ml-[15rem] group 
            "
          >
            <h1
              className="md:text-4xl uppercase  text-xl  font-thin 
              "
            >
              explore
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}
