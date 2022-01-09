import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Container from '@/components/Container'
import MDXComponents from '@/components/MDXComponents'
import Button from '../components/Button'
import { VscArrowLeft } from '../components/Icons'

const root = process.cwd()

export default function Page({ source }) {
  return (
    <Container>
      <Button>
        <VscArrowLeft size={14} />
      </Button>
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
  return {
    fallback: false,
    paths: files.map((f) => ({
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
