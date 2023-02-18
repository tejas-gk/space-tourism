import Head from 'next/head';
import React,{useState} from 'react';
import Navbar from '@/components/Navbar';
import { technology as t } from '@/setup/data.json';

type Technology = {
  name: string;
  images: {
    landscape: string;
    portrait: string;
  },
  description: string;
}
export default function technology() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [technology, setTechnology] = useState(t);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState<number>(0);
  const { name, images,description } =
    technology[selectedTechnologyIndex];
  // const imageSrc = images.png;

  return  <>
    <Head>
      <title>technology</title>
    </Head>

    <div className='bg-technology h-screen'>
      <Navbar />
      <section className='flex flex-col items-center justify-center h-full md:flex-row'>
        <div>
          <article
            className="max-w-7xl
          "
          >
            <h1
              className="text-indigo-100 uppercase text-lg lg:text-3xl tracking-[4px] mb-5
            "
            >
              <span className="text-gray-500 font-bold mr-2 lg:mr-4 ">03</span>
              SPACE LAUNCH 101
            </h1>
          </article>
        </div>
      </section>
    </div>
    
  </>;
}
