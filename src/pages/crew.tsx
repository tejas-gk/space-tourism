import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React,{useState} from 'react';
import Image from 'next/image';
import { crew as c } from '@/setup/data.json';

type Crews = {
  name: string;
  images: {
    png: string;
    webp: string;
  },
  role: string;
  bio: string;
}
export default function crew() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [crews, setCrews] = useState<Crews[]>(c);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCrewIndex, setSelectedCrewIndex] = useState<number>(0);

  const { name, images, role,bio } =
    crews[selectedCrewIndex];

  const imageSrc = images.png;
  return <>
    <Head>
      <title>crew</title>
    </Head>
    <div className='bg-crew h-screen'>
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
              <span className="text-gray-500 font-bold mr-2 lg:mr-4 ">01</span>
              meet your crew
            </h1>
            <h3

              className="text-gray-100 text-lg lg:text-2xl mb-5
            "
            >
              {role}
            </h3>
            <h2
              className="text-2xl lg:text-5xl font-bold text-gray-100 mb-5
            ">
              {name}
            </h2>
            <p>
              {bio}
            </p>
            <div>
              {
                crews.map((crew, index) => (
                  <button
                    key={crew.name}
                    onClick={() => setSelectedCrewIndex(index)}
                    className="text-gray-100 text-lg lg:text-2xl mb-5 h-3 w-3
                    bg-gray-500 rounded-full
                  "
                  >
                   
                  </button>
                ))
              }
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
          className="
              "
            />
        <div>

        </div>
      </section>
      
    </div>
  </>;
}
