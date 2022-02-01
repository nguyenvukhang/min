import '@/styles/global.css'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import Container from '@/components/Container'
import { Back } from '@/components/Buttons'
import components from '@/components/MDXComponents'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const path = router.pathname
  const noWrap = path === '/' || path === '/notes'
  return noWrap ? (
    <Component {...pageProps} />
  ) : (
    <MDXProvider components={components}>
      <Container>
        <Back />
        <Component {...pageProps} />
      </Container>
    </MDXProvider>
  )
}

export default MyApp
