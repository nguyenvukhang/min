import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Container from '@/components/Container'
import MDXComponents from '@/components/MDXComponents'
import { Back } from '@/components/Buttons'

const root = process.cwd()

export default function Page({ source }) {
  return (
    <Container>
      <Back />
      <MDXRemote {...source} components={MDXComponents} />
    </Container>
  )
}

async function getFiles(type) {
  return fs.readdirSync(path.join(root, type))
}

// this is ran before getStaticProps
export async function getStaticPaths() {
  const files = await getFiles('content')
  const mdxOnly = files.filter((e) => e.includes('mdx'))
  return {
    fallback: false,
    paths: mdxOnly.map((f) => ({
      params: {
        slug: f.replace(/\.mdx/, ''),
      },
    })),
  }
}

async function getFileBySlug(slug) {
  const raw = fs.readFileSync(
    path.join(root, 'content', `${slug}.mdx`),
    'utf-8'
  )
  const source = await serialize(raw)
  return { source }
}

// this is ran after getStaticPaths
export async function getStaticProps({ params }) {
  const content = await getFileBySlug(params.slug)
  return { props: { ...content } }
}
