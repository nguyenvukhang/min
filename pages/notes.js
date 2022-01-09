import Button, { Back } from '@/components/Buttons'
import Container from '@/components/Container'
import { Divider, VscArrowLeft } from '@/components/Icons'
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
      <Back/>
      <h1 className="text-xl font-head mt-4 mb-4">Short Notes</h1>
      <p className="my-4">
        <Impostor />
      </p>
      <LinkList />
    </Container>
  )
}

export default HomePage
