import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { technology as t } from '@/setup/data.json';
import Image from 'next/image';
type Technology = {
  name: string;
  images: {
    landscape: string;
    portrait: string;
  };
  description: string;
};
export default function technology() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [technology, setTechnology] = useState(t);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState<number>(0);
  const { name, images, description } = technology[selectedTechnologyIndex];

  return (
    <>
      <Head>
        <title>Technology</title>
      </Head>

      <div className="bg-technology min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto lg:pl-32 pb-24 pt-32 lg:pt-48">
          <h1 className="text-white uppercase text-lg lg:text-3xl tracking-[4px] pl-8">
            <span className="text-gray-500 font-bold mr-2 lg:mr-4">03</span>
            space launch 101
          </h1>

          <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="hidden md:block">
              <Image
                height={500}
                width={500}
                className=""
                alt="potriat image"
                src={images.portrait}
              />
            </div>
            <div className="block md:hidden">
              <Image
                height={500}
                width={500}
                className=""
                alt="landscape image"
                src={images.landscape}
              />
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-12 lg:mr-20">
              <div className="flex justify-center lg:flex-col mt-8">
                {technology.map((technology: Technology, index: number) => (
                  <button
                    className={`flex justify-center items-center w-8 h-8 md:w-16 md:h-16 text-lg lg:text-2xl transition ease-in-out
                    md:mr-0 mr-2 lg:mr-0 lg:mb-4
                    rounded-full border border-white/20 hover:border-white duration-200 ${
                      index === selectedTechnologyIndex
                        ? 'bg-white text-black'
                        : 'bg-transparent text-white'
                    }`}
                    key={technology.name}
                    onClick={() => setSelectedTechnologyIndex(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex flex-col space-y-6 px-8 lg:px-0">
                <div className="text-center lg:text-left">
                  <small className=" text-white uppercase text-lg tracking-wider">
                    the terminology...
                  </small>
                  <h2 className="font-serif text-white uppercase text-3xl lg:text-5xl mt-2">
                    {name}
                  </h2>
                </div>

                <p className=" text-white leading-relaxed text-center lg:text-left lg:text-lg max-w-md">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
