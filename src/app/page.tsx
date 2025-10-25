import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'
import { Container } from '@/components/Container'
import Blog from '@/components/Blog'
import Services from '@/components/Services'
import About from '@/components/About'
import OurTeam from '@/components/OurTeam'
import ContactUs from '@/components/contactUs'
import Projects from '@/components/Projects'
import HomeHero from '@/components/HomeHero'
import MediaTeam from '@/components/MediaTeamCards'
  
export default async function Home() {
  return (
    <>
      <Container>
        <section id="home">
          <HomeHero />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="ourteam">
          <OurTeam />
        </section>

        <section id="MediaTeam">
          <MediaTeam />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </Container>
    </>
  )
}
