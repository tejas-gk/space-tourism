import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import { crew as c } from '@/setup/data.json';

type Crews = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};
export default function crew() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [crews, setCrews] = useState<Crews[]>(c);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCrewIndex, setSelectedCrewIndex] = useState<number>(0);

  const { name, images, role, bio } = crews[selectedCrewIndex];

  const imageSrc = images.png;
  return (
    <>
      <Head>
        <title>crew</title>
      </Head>
      <div className="bg-crew h-screen md:overflow-hidden pb-20
      ">
        <Navbar />
        <section className="flex flex-col items-center justify-center h-full md:flex-row max-w-7xl mx-auto px-8 md:px-32">
          <div className='className="flex md:flex-col flex-col-reverse justify-center items-center'>
            <h1
              className="text-indigo-100 uppercase text-lg lg:text-3xl tracking-[4px] mb-[14rem]
            "
            >
              <span className="text-gray-500 font-bold mr-2 lg:mr-4 ">
                02
              </span>
              meet your crew
            </h1>
            <article
              className="max-w-7xl 
          "
            >
             
              <h3
                className="text-slate-500 text-xl lg:text-3xl
            "
              >
                {role}
              </h3>
              <h2
                className="text-2xl lg:text-5xl  text-gray-100 mb-5 font-serif
            "
              >
                {name}
              </h2>
              <p className="text-indigo-100 leading-relaxed text-center lg:text-left lg:text-lg
              ">{bio}</p>
              <div className='flex gap-5'>
                {crews.map((crew:Crews, index:number) => (
                  <button
                    key={crew.name}
                    onClick={() => setSelectedCrewIndex(index)}
                    className={`text-gray-100 text-lg lg:text-2xl mb-5 h-3 w-3
                    bg-gray-500 rounded-full mt-10 ${
                      index === selectedCrewIndex && 'bg-white'
                    }
                  `}
                  ></button>
                ))}
              </div>
            </article>
          </div>
          <Image
            loader={({ src }) => {
              return `${src}?webp`;
            }}
            src={imageSrc}
            alt={name}
            width={100}
            height={100}
            className="w-72 md:w-full mx-auto mt-auto
              "
          />
          <div></div>
        </section>
      </div>
    </>
  );
}
