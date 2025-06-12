import { lastThreePosts } from '@/lib/mdx'
import Image from 'next/image'
import Post01 from '@/public/images/blog-01.jpg'
import Post02 from '@/public/images/blog-02.jpg'
import Post03 from '@/public/images/blog-03.jpg'
import PostAuthor01 from '@/public/images/blog-author-01.jpg'
import PostAuthor02 from '@/public/images/blog-author-02.jpg'
import PostAuthor03 from '@/public/images/blog-author-03.jpg'
import ArticleCard from './article_card'

export default function Blog() {
  const posts = lastThreePosts()

  return (
    <>
      {posts.length > 0 && (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="pb-12 md:pb-20">
                <h2 className="h2 font-cabinet-grotesk text-center md:text-left">Cela peut vous intéresser !</h2>
              </div>
              {/* Posts */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {posts.map((post) => (
                  <ArticleCard key={post.slug} article={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}