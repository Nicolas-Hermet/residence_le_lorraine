import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <time className="text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
        <div className="mt-8">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  )
}
