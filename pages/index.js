import Container from '@/components/Container'
import { Divider } from '@/components/Icons'
import ShortNotes from '@/components/ShortNotes'
import Link from 'next/link'

const Impostor = () => {
  return (
    <Link href="/uni">
      <a className="font-bold">{`Student of Math. `}</a>
    </Link>
  )
}

const LinkList = () => {
  const links = [
    ['Github', 'https://github.com/nguyenvukhang'],
    ['Instagram', 'https://instagram.com/nvkse'],
  ]
  return (
    <p className="my-4">
      {`Also on: `}
      {links.map((e, i) => {
        return (
          <>
            <a className="text-teal-500" target="_blank" href={e[1]}>
              {e[0]}
            </a>
            {i < links.length - 1 ? <span>{`, `}</span> : null}
          </>
        )
      })}
    </p>
  )
}

const InDevelopment = () => {
  return (
    <>
      <Divider />
      <ShortNotes />
      <Divider />
      <ShortNotes />
    </>
  )
}

function HomePage() {
  return (
    <Container>
      <div className="mt-8">
        <h1 className="text-xl font-head my-8">Nguyễn Vũ Khang</h1>
        <p className="my-4">
          <Impostor />
          Enjoys building software. Writes Bash, Lua, JavaScript, HTML and CSS.
          Likes to make websites. Cares about usability, accessibility, and
          maintainability. Started out in Notepad, lived in Sublime for a few
          years, now based in Neovim.
        </p>
        <LinkList />
      </div>
    </Container>
  )
}

export default HomePage
