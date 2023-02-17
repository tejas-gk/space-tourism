import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React, { useState } from 'react';
import { destinations } from '@/setup/data.json';
import Image from 'next/image';
type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export default function Destination() {
  const [planets, setPlanets] = useState<Destination[]>(destinations);
  const [selectedPlanet, setSelectedPlanet] = useState<number>(0);

  const { name, images, description, distance, travel } =
    planets[selectedPlanet];

  const imageSrc = images.png;

  return (
    <>
      <Head>
        <title>Destination</title>
      </Head>

      <div className="bg-destination min-h-screen md:overflow-hidden pb-20 ">
        <Navbar />
        <section className="flex flex-col md:flex-row justify-between items-center px-5 text-white max-w-7xl mx-auto gap-[10rem] mt-16">
          <article
            className="max-w-7xl
          "
          >
            <h1
              className="text-indigo-100 uppercase text-lg lg:text-3xl tracking-[4px] mb-5 
            "
            >
              <span className="text-gray-500 font-bold mr-2 lg:mr-4 ">01</span>
              pick your destination
            </h1>
            <Image
              loader={({ src }) => {
                return `${src}?webp`;
              }}
              src={imageSrc}
              alt={name}
              width={1000}
              height={1000}
              className="rounded-full"
            />
          </article>
          <article
            className="text-center space-y-8 lg:text-left mt-12 
          "
          >
            <div className="flex text-center">
              {planets.map((planet, index) => (
                <button
                  key={index}
                  className={`cursor-pointer uppercase text-white text-md pb-2  border-b mx-2 border-transparent 
                    hover:border-white transition-all duration-300 ease-in-out ${
                      selectedPlanet === index && 'border-white'
                    }
                  `}
                  onClick={() => setSelectedPlanet(index)}
                >
                  <p>{planet.name}</p>
                </button>
              ))}
            </div>
            <h1 className="uppercase text-6xl  text-white">{name}</h1>
            <p className="text-indigo-100 leading-loose lg:text-lg">
              {description}
            </p>
            <div className="w-full h-[1px] bg-white/20"></div>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start md:space-x-12 space-y-6 md:space-y-0">
              <div className="text-center lg:text-left">
                <h2 className="uppercase text-indigo-100 mb-2 tracking-wider">
                  avg. distance
                </h2>
                <p className="uppercase text-white text-3xl">{distance}</p>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="uppercase text-indigo-100 mb-2 tracking-wider">
                  est. travel time
                </h2>
                <p className="uppercase text-white text-3xl">{travel}</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
