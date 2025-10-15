import Link from 'next/link'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'


// Define SocialLink locally since it is not exported from SocialIcons
function SocialLink({
  href,
  ariaLabel,
  icon: Icon,
}: {
  href: string
  ariaLabel: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="group -m-1 p-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500" />
    </a>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
            </div>
            <div>
              <div className="mt-10 flex items-center justify-center gap-10">
                <SocialLink href="#" ariaLabel="Follow on X" icon={XIcon} />
                <SocialLink
                  href="#"
                  ariaLabel="Follow on Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href="#"
                  ariaLabel="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="#"
                  ariaLabel="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
            </div>
            <p className="mt-10 text-center text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Spencer Sharp. All rights
              reserved.
            </p>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
