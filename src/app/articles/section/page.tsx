import Image from 'next/image'
import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
        author: 'Change Academe Team',
        date: '2025-10-12',
        title: 'Join Our Programming Community',
        description:
                'Change Academe brings together developers and enthusiasts, even beginners, to learn, collaborate, and work on real projects.',
}

export const metadata = {
        title: article.title,
        description: article.description,
}

export default function SectionPage(props: any) {
        return (
                <ArticleLayout article={article} {...props}>
                        <p>
                                Welcome to Change Academe! Our team of developers, designers, and backend
                                experts is here to help you learn, grow, and join real projects.
                        </p>

                        <Image
                                src="/images/team-section.png"
                                alt="Programming team illustration"
                                width={800}
                                height={400}
                                className="my-4 rounded-lg"
                        />

                        <p>
                                Whether you are an experienced developer or just starting out, our community
                                is open for everyone. Join us, collaborate on projects, and gain real-world
                                experience.
                        </p>
                </ArticleLayout>
        )
}
