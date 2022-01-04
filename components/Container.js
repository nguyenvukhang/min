import Head from 'next/head'
import NextLink from 'next/link'

function Footer() {
  return (
    <div className="flex justify-center relative h-28 w-fill">
    <div className="absolute bottom-10">
      <NextLink href="https://github.com/nguyenvukhang">
        <a target="_blank" className="text-gray-500 hover:no-underline">khang</a>
      </NextLink>
    </div>
    </div>
  )
}

export default function Container({ children }) {
  const bg = 'bg-brew-light dark:bg-brew-dark'
  const title = 'uni'
  return (
    <div className={`flex flex-col min-h-screen ${bg}`}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto w-full max-w-3xl flex flex-col min-h-screen">
      <main
        id="skip"
        className={`text-gray-800 flex flex-col px-8 leading-7 flex-1 ${bg}`}
      >
        {children}
      </main>
      <Footer />
      </div>
    </div>
  )
}
