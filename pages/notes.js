import Button, { Back } from '@/components/Buttons'
import Container from '@/components/Container'
import { Divider, VscArrowLeft } from '@/components/Icons'
import NotesList from '@/components/NotesList'
import ShortNotes from '@/components/ShortNotes'
import Link from 'next/link'
import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'
import { JSON_SCHEMA } from 'js-yaml'

const root = process.cwd()

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
            <a className="text-teal-500" target="_blank" rel="noreferrer" href={e[1]}>
              {e[0]}
            </a>
            {i < links.length - 1 ? <span>{`, `}</span> : null}
          </>
        )
      })}
    </p>
  )
}

function NotesPage({ source }) {
  return (
    <Container>
      <Back />
      <h1 className="text-xl font-head mt-4 mb-1">Short Notes</h1>
      <p className="text-xs tracking-normal text-gray-400 mb-12">
        Bits and pieces of my life.
      </p>
      <NotesList source={source} />
    </Container>
  )
}

async function getNotes() {
  const raw = fs.readFileSync(path.join(root, 'content', `notes.yml`), 'utf-8')
  const source = await yaml.load(raw, null, JSON_SCHEMA, true)
  return source
}

export const getStaticProps = async () => {
  const source = await getNotes()
  return {
    props: {
      source
    },
  }
}

export default NotesPage
