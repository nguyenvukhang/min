const H1 = ({ children }) => {
  return <h1 className="text-3xl">{children}</h1>
}
const UL = ({ children }) => {
  return <h1 className="text-3xl">{children}</h1>
}

const MDXComponents = {
  h1: H1,
  ul: UL,
}

export default MDXComponents
