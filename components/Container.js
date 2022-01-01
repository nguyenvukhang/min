import Head from 'next/head'

export default function Container({ children }) {
  const bg = 'bg-brew-light dark:bg-brew-dark'
  const title = 'uni'
  return (
    <div className={bg}>
      <Head>
        <title>{title}</title>
      </Head>
      <main id="skip" className={`flex flex-col justify-center px-8 ${bg}`}>
        {children}
      </main>
    </div>
  )
}
