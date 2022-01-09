import Container from '@/components/Container'

function HomePage() {
  return (
    <Container>
      <div className="mt-8">
        <h2 className="font-head">Font test</h2>
        <p>Inter by default</p>
        <p className="font-head">Readex by tailwind</p>
        <p className="font-sans">Inter by tailwind</p>
        <p className="font-mono">JetBrains Mono by tailwind</p>
        <p style={{ fontFamily: 'Readex Pro' }}>Readex by js</p>
        <p style={{ fontFamily: 'Inter' }}>Inter by js</p>
        <p style={{ fontFamily: 'JetBrains Mono' }}>JetBrains Mono by js</p>
      </div>
    </Container>
  )
}

export default HomePage
