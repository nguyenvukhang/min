import '@/styles/global.css'
import { MDXProvider } from '@mdx-js/react'

function MyApp({ Component, pageProps }) {
  const H1 = ({ children }) => {
    return <h1 className="text-3xl">{children}</h1>
  }
  const UL = ({ children }) => {
    return <h1 className="text-3xl">{children}</h1>
  }
  const components = {
    h1: H1,
    ul: UL,
  }

  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
