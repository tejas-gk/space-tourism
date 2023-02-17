import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React, { useState } from 'react'
import { destinations } from '@/setup/data.json'
import Image from 'next/image'
type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}


export default function Destination() {
  const [planets, setPlanets] = useState<Destination[]>(destinations)
  const [selectedPlanet, setSelectedPlanet] = useState<number>(0)

  const {
    name,
    images,
    description,
    distance,
    travel
  } = planets[selectedPlanet]

  const imageSrc = images.png

  return (
    <>
      <Head>
        <title>Destination</title>
      </Head>

      <div className="bg-destination min-h-screen md:overflow-hidden pb-20">
        <Navbar />
        <section className='flex flex-col md:flex-row justify-between items-center'>
          <div>

         
          <h1>01 Pick your destinations</h1>
          <div>
            <article>
              <Image
                loader={({ src }) => {
                  return `${src}?webp`
                }}
                src={imageSrc}
                alt={name}
                width={500}
                height={500}
                className='rounded-full'
              />

              </article>
            </div>
          </div>
          <div>
            <article>
              <div className="flex">

              {
                planets.map((planet, index) => (
                  <div key={index}
                  className='cursor-pointer'
                  onClick={() => setSelectedPlanet(index)}>
                    <p>
                      {planet.name}
                    </p>
                  </div>
                  
                  ))
                }
                </div>
              <h1>{name}</h1>
              <p>{description}</p>
              <ul>
                <li>Avg Distance {distance}</li>
                <li>Est. Time {travel}</li>
              </ul>
            </article>
          </div>
          <div>{/* add content here */}</div>
        </section>
      </div>
    </>
  )
}
