import Container from '@/components/Container'

function HomePage() {
  const linkList = [
    ['Github', 'https://github.com/nguyenvukhang'],
    ['Instagram', 'https://instagram.com/nvkse'],
  ]
  return (
    <Container>
      <div className="mt-8">
        <h1 className="text-xl font-head my-8">Nguyễn Vũ Khang</h1>
        <p className="my-4">
          <b>Student of Math.</b> Enjoys building software. Writes Bash, Lua,
          JavaScript, HTML and CSS. Likes to make websites. Cares about
          usability, accessibility, and maintainability. Started out in Notepad,
          lived in Sublime for a few years, now based in Neovim.
        </p>
        <p className="my-4">
          {`Also on: `}
          {linkList.map((e, i) => {
            return (
              <>
                <a className="text-teal-500" target="_blank" href={e[1]}>
                  {e[0]}
                </a>
                {(i < linkList.length - 1) ? <span>{`, `}</span> : null}
              </>
            )
          })}
        </p>
      </div>
    </Container>
  )
}

export default HomePage
