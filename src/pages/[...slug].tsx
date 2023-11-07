import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import remarkHtml from 'remark-html'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import Layout from '../components/Layout'
import hljs from 'highlight.js'
import 'highlight.js/styles/a11y-dark.css'
import 'github-markdown-css'

type Props = {
  post: {
    date: string;
    title: string;
    content: string;
  }
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <>
      {router.isFallback ? (
        <h1>ロード中...</h1>
      ) : (
        <>
          <Head>
            <title>{post.title} | FAQ</title>
          </Head>
          <Layout>
            <main className="px-5 bg-blue-50 pt-5 pb-20 min-h-screen">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl px-4 pb-20">
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </main>
          </Layout>
        </>
      )}
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string[]
  }
}

const markdownToHtml = async (markdown: string) => {
  const htmlResult = await unified()
    .use(remarkParse)
    .use(remarkHtml,{sanitize:false})
    .process(markdown)
  return htmlResult.toString()
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    'date',
    'title',
    'content',
  ])
  const content = await markdownToHtml((post.content as string) || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export const getStaticPaths = async () => {
  let posts = getAllPosts()
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post
        }
      }
    }),
    fallback: false
  }
}