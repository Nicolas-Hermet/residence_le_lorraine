import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from "@/lib/mdx"
import Post01 from '@/public/images/blog-01.jpg'
import Post02 from '@/public/images/blog-02.jpg'
import Post03 from '@/public/images/blog-03.jpg'
import Avatar from '@/public/images/join-avatar.jpg'

interface Props {
  article: BlogPost
}

const thumbnailImage = (thumbnail: string | undefined) => {
  const images = [Post01, Post02, Post03];
  const imageSrc = images[Math.floor(Math.random() * images.length)];
  const ImageSrc = thumbnail ? thumbnail : imageSrc;

  return ImageSrc;
}

export default function ArticleCard({ article }: Props) {
  console.log(`Article thumbnail: ${article.thumbnail}`);
  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-down">
      {/* Thumbnail */}
      <Link href={`/blog/${article.slug}`} className="block group overflow-hidden">
        <Image className="w-full aspect-7/4 object-cover group-hover:scale-105 transition duration-700 ease-out" src={thumbnailImage(article.thumbnail)} width={347} height={198} alt="Default Post Thumbnail" />
      </Link>
      {/* Content */}
      <div className="grow flex flex-col">
        <header>
          <h3 className="h4 font-cabinet-grotesk font-bold mb-2">
            <a className="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">{article.title}</a>
          </h3>
        </header>
        <p className="text-gray-500 grow">{article.description}</p>
        {/* Author */}
        <footer className="flex items-center text-sm mt-4">
          <a href="#0">
            <Image className="rounded-full shrink-0 mr-3" src={Avatar} width={32} height={32} alt="Author 01" />
          </a>
          <div>
            <span className="text-gray-500">Par</span> <a className="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Nicolas Hermet</a>
          </div>
        </footer>
      </div>
    </article>
  )
}
