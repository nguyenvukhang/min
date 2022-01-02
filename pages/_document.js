import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className='bg-brew-light dark:bg-brew-dark'>
        <Head></Head>
        <body className="bg-brew-light dark:bg-brew-dark text-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
