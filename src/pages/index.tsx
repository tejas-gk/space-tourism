import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg  h-screen">
        <Navbar />
        <section className="flex flex-row items-center justify-between h-screen ">
          <div className='ml-40 w-1/2'>
            <p className='text-[#4b4d61] text-2xl mb-24
            '>
              SO, YOU WANT TO TRAVEL TO
            </p>
            <span className="text-4xl lg:text-9xl text-white mt-5 mb-10 tracking-widest
            ">
              SPACE
            </span>
            <p className="text-gray-400 w-3/4 mt-10
            ">
              Let&#39;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className=' bg-white rounded-full w-[20rem] h-[20rem] flex items-center justify-center mr-[15rem]  cursor-pointer
          '>
            <h1 className="text-5xl uppercase 
            ">explore</h1>
          </div>
        </section>

      </main>
    </>
  )
}
