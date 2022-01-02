import Head from 'next/head'
import NextLink from 'next/link'

function Footer() {
  return (
    <div className="flex justify-center relative h-48 w-fill">
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
    <div className={bg}>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        id="skip"
        className={`flex flex-col px-8 mx-auto w-full max-w-3xl leading-7 ${bg}`}
        // className='flex flex-col px-8 mx-auto w-full max-w-4xl bg-blue-100'
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}
