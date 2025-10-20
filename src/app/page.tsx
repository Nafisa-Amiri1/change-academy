import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import Blog from '@/components/Blog'
import Services from '@/components/Services'
import About from '@/components/About'
import OurTeam from '@/components/OurTeam'
import ContactUs from '@/components/contactUs'
import Projects from './projects/page'
import HomeHero from '@/components/HomeHero'

export default async function Home() {
  return (
    <>
      <Container>
        <HomeHero />
        <Blog />
        <About />
        <Services />
        <Projects />
        <OurTeam />
        <ContactUs />
      </Container>
    </>
  )
}
