import Head from 'next/head'

function Footer() {
  return (
    <div className="flex w-fill border-t-2 mb-10 mt-28">
      <div className="mt-4">
        <span className="text-gray-800 hover:no-underline">
          Nguyễn Vũ Khang
        </span>
      </div>
    </div>
  )
}

export default function Container({ children }) {
  const bg = 'bg-brew-light dark:bg-brew-dark'
  const title = 'khang'
  return (
    <div className={`flex flex-col min-h-screen ${bg}`}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto max-w-2xl px-6 w-full tracking-tight">
        <div className="flex flex-col min-h-screen">
          <main
            className={`text-gray-800 text-base flex flex-col flex-1 mt-16 ${bg}`}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
