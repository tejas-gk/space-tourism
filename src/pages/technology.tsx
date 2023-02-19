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
  // const imageSrc = images.png;

  return (
    <>
      <Head>
        <title>Technology</title>
      </Head>

      <div className="bg-technology min-h-screen">
        <Navbar />
        <section className="mx-auto lg:pl-32 pb-24 pt-32 lg:pt-48 max-w-7xl md:max-w-none">
          <div>
            <article
              className="max-w-7xl md:max-w-none
          "
            >
              <h1
                className="text-indigo-100 uppercase text-lg lg:text-3xl tracking-[4px] mb-5
            "
              >
                <span className="text-gray-500 font-bold mr-2 lg:mr-4 ">
                  03
                </span>
                SPACE LAUNCH 101
              </h1>

              <div className="flex flex-col lg:flex-row-reverse justify-center items-center space-y-6 lg:space-y-0">
                <div>
                  <Image
                    src={images.landscape}
                    alt={name}
                    width={500}
                    height={500}
                    className="min-w-[500px] min-h-[500px] lg:min-w-[600px] lg:min-h-[600px]  md:ml-28"
                  />
                </div>

                <div className="flex flex-row gap-20">
                  <div className="flex md:flex-col flex-row">
                    {technology.map((tech, index) => (
                      <div
                        key={tech.name}
                        className={`flex flex-col items-center justify-center cursor-pointer md:w-10 md:h-10 rounded-full border-2 border-indigo-100 md:text-3xl 
                          md:p-10 md:mt-6 w-5 h-5 p-5 text-lg
                          ${
                            index === selectedTechnologyIndex
                              ? 'text-black bg-white'
                              : 'text-gray-500'
                          }`}
                        onClick={() => setSelectedTechnologyIndex(index)}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-6 px-8 lg:px-0">
                    <div className="text-center lg:text-left">
                      <small className="font-sanCondensed text-indigo-100 uppercase text-lg tracking-wider">
                        the terminology...
                      </small>
                      <h2 className="font-serif text-white uppercase text-3xl lg:text-5xl mt-2">
                        {name}
                      </h2>
                    </div>

                    <p className=" text-indigo-100 leading-relaxed text-center lg:text-left lg:text-lg max-w-md">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
