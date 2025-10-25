import React from 'react'

export default function HomeHero() {
  return (
           <div className="mt-52">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              Developers. Designers. Problem-solvers.
            </h1>

            <p className="mt-6 text-base text-zinc-600">
              We are Change Academy, a team of passionate programmers and designers creating projects and opportunities for aspiring developers worldwide.
            </p>

            <p className="mt-6 text-base text-zinc-600">
              Our company manages projects based on contractual agreements, and upon completion, 20% of the total cost is allocated to the team as its service share.
            </p>

            {/* Buttons Section */}
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-[#68d2bc]  text-white hover:opacity-90 transition hover:bg-[#68d2bc] ">
                Support
              </button>
              <button className="px-6 py-3 rounded-lg border border-[#68d2bc]  text-zinc-800 hover:bg-[#68d2bc] hover:text-white transition">
                Work with us
              </button>
            </div>
          </div>
      </div>
      
  )
}
