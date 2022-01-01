import Head from 'next/head'

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
        className={`flex flex-col px-8 mx-auto w-full max-w-4xl ${bg}`}
        // className='flex flex-col px-8 mx-auto w-full max-w-4xl bg-blue-100'
      >
        {children}
      </main>
    </div>
  )
}
