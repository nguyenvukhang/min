import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Container from '@/components/Container'
import sunNUSComponents from '@/components/sunNUSComponents'
import { ChakraProvider } from '@chakra-ui/provider'

const root = process.cwd()
const mdxFilename = 'exco-meet-1'

export default function Page({ source }) {
  return (
    <Container>
      <ChakraProvider>
        <MDXRemote {...source} components={sunNUSComponents} />
      </ChakraProvider>
    </Container>
  )
}

async function getFile(f) {
  const raw = fs.readFileSync(path.join(root, 'content', `${f}.mdx`), 'utf-8')
  const source = await serialize(raw)
  return { source }
}

export async function getStaticProps() {
  const content = await getFile(mdxFilename)
  return { props: { ...content } }
}
