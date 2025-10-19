import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'
// import aboutImage from "../../images/team.jpg"
import aboutImage from '@/images/team.jpg'


function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'About',
    description:
        'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={aboutImage}
                            alt=""
                            sizes="(min-width: 1024px) 100vw, 90vw"
                            className="aspect-square w-full rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        We are Change Academy, a creative team of designers and developers
                        shaping the future of digital experiences.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            We’ve always believed that creativity and technology together can
                            change how people connect with the world. What began as a small
                            group of curious learners — exploring design, coding, and visual
                            storytelling — has grown into a collaborative studio where ideas
                            turn into reality.
                        </p>
                        <p>
                            Our journey didn’t start in a big office or with fancy tools. It
                            started with late nights, shared passion, and the belief that good
                            design can make life easier, more beautiful, and more human. Each
                            of us came from different paths — web design, UX/UI, mobile, and
                            graphic design — but our goals aligned: to create meaningful
                            digital experiences that truly make an impact.
                        </p>
                        <p>
                            Over time, we’ve built more than just websites and apps — we’ve
                            built a community. A team that learns, experiments, and grows
                            together. Every project is a new challenge, an opportunity to
                            bring creativity and technology into perfect harmony.
                        </p>
                        <p>
                            Today, Change Academy continues to design for the future —
                            blending imagination with precision, and passion with purpose. We
                            may not be sending rockets into space (yet), but we’re creating
                            digital experiences that help people dream bigger, connect better,
                            and build a more inspiring online world.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="#" icon={XIcon}>
                            Follow on X
                        </SocialLink>
                        <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                            Follow on Instagram
                        </SocialLink>
                        <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:spencer@planetaria.tech"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            spencer@planetaria.tech
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
