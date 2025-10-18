// import Image, { type ImageProps } from 'next/image'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { Container } from '@/components/Container'
// import Blog from '@/components/Blog'
// import Services from '@/components/Services'
// import { Button } from '@/components/Button'

// import image1 from '@/images/photos/image-1.jpg'
// import image2 from '@/images/photos/image-2.jpg'
// import image3 from '@/images/photos/image-3.jpg'
// import image4 from '@/images/photos/image-4.jpg'
// import image5 from '@/images/photos/image-5.jpg'
// import Projects from './projects/page'

// import { Button } from '@/components/Button'
// import Navbar from "@/components/Navbar" 


// interface Role {
//   company: string
//   title: string
//   logo: ImageProps['src']
//   start: string | { label: string; dateTime: string }
//   end: string | { label: string; dateTime: string }
// }

// function Role({ role }: { role: Role }) {
//   let startLabel =
//     typeof role.start === 'string' ? role.start : role.start.label
//   let startDate =
//     typeof role.start === 'string' ? role.start : role.start.dateTime

//   let endLabel = typeof role.end === 'string' ? role.end : role.end.label
//   let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

//   return (
//     <li className="flex gap-4">
//       <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//         <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
//       </div>
//       <dl className="flex flex-auto flex-wrap gap-x-2">
//         <dt className="sr-only">Company</dt>
//         <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
//           {role.company}
//         </dd>
//         <dt className="sr-only">Role</dt>
//         <dd className="text-xs text-zinc-500 dark:text-zinc-400">
//           {role.title}
//         </dd>
//         <dt className="sr-only">Date</dt>
//         <dd
//           className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
//           aria-label={`${startLabel} until ${endLabel}`}
//         >
//           <time dateTime={startDate}>{startLabel}</time>{' '}
//           <span aria-hidden="true">—</span>{' '}
//           <time dateTime={endDate}>{endLabel}</time>
//         </dd>
//       </dl>
//     </li >
//   )
// }


// function Photos() {
//   let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
//               rotations[imageIndex % rotations.length],
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default async function Home() {
//   return (
//     <>
//       <Container>
//         <div className="mt-9">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
//               Developers. Designers. Problem-solvers.
//             </h1>

//             <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
//               We are Change Academy, a team of passionate programmers and designers creating projects and opportunities for aspiring developers worldwide.
//             </p>

//             <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
//               Our company manages projects based on contractual agreements, and upon completion, 20% of the total cost is allocated to the team as its service share.
//             </p>

//             {/* Buttons Section */}
//             <div className="mt-8 flex gap-4">
//               <button className="px-6 py-3 rounded-lg bg-[#68d2bc]  text-white dark:bg-[#68d2bc]  dark:text-zinc-900 hover:opacity-90 transition hover:bg-[#68d2bc] ">
//                 Support
//               </button>
//               <button className="px-6 py-3 rounded-lg border border-[#68d2bc]  text-zinc-800 dark:border-[#68d2bc] dark:text-zinc-100 hover:bg-[#68d2bc] hover:text-white dark:hover:bg-[#68d2bc]  dark:hover:text-zinc-900 transition">
//                 Work with us
//               </button>
//             </div>
//           </div>
//         </div>

//         <Blog />
//         <Services />
//         <Projects />
//       </Container>
//     </>
//   )
// }
