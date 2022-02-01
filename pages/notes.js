import { Back } from '@/components/Buttons'
import Container from '@/components/Container'
import NotesList from '@/components/NotesList'
import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'
import { JSON_SCHEMA } from 'js-yaml'

const root = process.cwd()

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
  const raw = fs.readFileSync(path.join(root, 'pages', `notes.yml`), 'utf-8')
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
