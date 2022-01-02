import Container from '@/components/Container'
import mdx from '@/components/MDXComponents'

function HomePage() {
  return (
    <Container>
      <div>
        <mdx.h1>Hello from Next.js!</mdx.h1>
        <mdx.pre>Hello from Next.js!</mdx.pre>
      </div>
    </Container>
  )
}

export default HomePage
