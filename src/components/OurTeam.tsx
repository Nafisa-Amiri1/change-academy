'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HakimaImg from '@/images/Hakima.png'
import NafisaImg from '@/images/Nafisa.png'
import FatimaImg from '@/images/Fatima.png'
import FatimaHassaniImg from '@/images/FatimaHassani.png'
import SadiqaImg from '@/images/Sediqa.png'
import ParvenImg from '@/images/Parven.png'
import TayebehImg from '@/images/Tayebeh.png'
import HafizaImg from '@/images/Hafiza.png'
import ZaynabImg from '@/images/Zaynab.png'
import MasoumehImg from '@/images/Masoumeh.png'

const people = [
  {
    name: 'Hakima Noori',
    role: 'Full Stack Developer',
    imageUrl: HakimaImg,
    GitHubUrl: 'https://github.com/HakimaNoori',
    linkedinUrl: 'https://www.linkedin.com/in/hakima-noori',
  },
  {
    name: 'Nafisa Amiri',
    role: 'Frontend Developer',
    imageUrl: NafisaImg,
    GitHubUrl: 'https://github.com/Nafisa-Amiri1',
    linkedinUrl: 'https://www.linkedin.com/in/nafisa-amiri-30-na',
  },
  {
    name: 'Fatima Mousavi',
    role: 'Frontend Developer',
    imageUrl: FatimaImg,
    GitHubUrl: 'https://github.com/fatima-mousavi224',
    linkedinUrl:
      'https://www.linkedin.com/in/fatima-mousavi-aa70aa352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Fatima Hassani',
    role: 'Frontend Developer',
    imageUrl: FatimaHassaniImg,
    GitHubUrl: 'https://github.com/fatima-hassani77',
    linkedinUrl: 'https://www.linkedin.com/in/fatima-hassani/',
  },
  {
    name: 'Sadiqa Hosseini',
    role: 'UI/UX Designer',
    imageUrl: SadiqaImg,
    PortfolioUrl: 'https://seddiqahossaini.framer.website/',
    linkedinUrl: 'https://linkedin.com/in/seddiqa-hossaini-09a8a0355',
  },
  {
    name: 'Parven Rezaye',
    role: 'Frontend Developer',
    imageUrl: ParvenImg,
    GitHubUrl: 'https://github.com/parvenrezaye',
    linkedinUrl: '#',
  },
  //6 SHOWMORE
  {
    name: 'Hafiza Sharify',
    role: 'Frontend Developer',
    imageUrl: HafizaImg,
    GitHubUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Zainab Jafari',
    role: 'Frontend Developer',
    imageUrl: ZaynabImg,
    GitHubUrl: 'https://github.com/Zainab-Jafari2025',
    linkedinUrl: 'https://www.linkedin.com/in/zainab-jafari-1419ab31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Masoumeh Hosseini',
    role: 'Mobile App Developer',
    imageUrl: MasoumehImg,
    GitHubUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/masooma-hossaini-28324b274 ',
  },
  {
    name: 'Tayebeh Khaori',
    role: 'Graphic Designer',
    imageUrl: TayebehImg,
    PortfolioUrl: 'https://drive.google.com/file/d/1aqnwHqXxmC2vQ8d-HQXcelOfkUlDRIcA/view?usp=drive_link',
    linkedinUrl: '#',
  },

]

export default function Example() {
  const [showMore, setShowMore] = useState(false)
  const visiblePeople = showMore ? people : people.slice(0, 6)

  return (
    <div className="bg-white dark:bg-[#18181b] py-24 sm:py-32 transition-colors duration-500 max-w-4xl m-auto sm:mx-10 md:mx-20 Xl:mx-20 xl:m-auto ">
      <div className="mx-auto px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-black sm:text-5xl dark:text-white ">
            Our Team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            We are a dynamic group of people who do what we are passionate about and are dedicated to delivering the best results for our clients.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {visiblePeople.map((person, index) => (
            <li key={index}>
              <Image
                src={person.imageUrl}
                alt={person.name}
                width={220}
                height={220}
                className="mx-auto w-45 h-45 rounded-full outline-1 -outline-offset-1 outline-white/10 object-cover border-2 border-[#68d2bc] dark:border-none"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-500">
                {person.name}
              </h3>
              <p className="text-sm/6 text-gray-500">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">

                {person.GitHubUrl && (
                  <li>
                    <Link href={person.GitHubUrl} className="text-gray-400 hover:text-[#68d2bc]">
                      <span className="sr-only">GitHub</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                      >
                        <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.811 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z" />
                      </svg>
                    </Link>
                  </li>
                )}

                {person.linkedinUrl && (
                  <li>
                    <Link href={person.linkedinUrl} className="text-gray-400 hover:text-[#68d2bc]">
                      <span className="sr-only">LinkedIn</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5">
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                )}

                {person.PortfolioUrl && (
                  <li>
                    <Link href={person.PortfolioUrl} className="text-gray-400 hover:text-[#68d2bc]">
                      <span className="sr-only">Portfolio</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                        <path d="M5 5h5V3H3v7h2V5z" />
                        <path d="M19 19h-5v2h7v-7h-2v5z" />
                        <path d="M5 19v-5H3v7h7v-2H5z" />
                      </svg>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
        {/* دکمه بیشتر */}
        <div className="mt-10 flex justify-center">
          {people.length > 6 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2 bg-[#68d2bc] text-white rounded-xl hover:bg-[#57b5a4] transition"
            >
              {showMore ? 'SHOW LESS' : 'SHOW MORE'}
            </button>
          )}
        </div>
      </div>
    </div >
  )
}
