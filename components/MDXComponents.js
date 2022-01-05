import Link from 'next/link'

const h1 = ({ children }) => {
  return <h1 className="text-4xl font-bold mt-8 mb-3">{children}</h1>
}
const h2 = ({ children }) => {
  return <h1 className="text-3xl font-semibold mt-8 mb-3">{children}</h1>
}
const h3 = ({ children }) => {
  return <h1 className="text-2xl font-semibold mt-6 mb-3">{children}</h1>
}
const ul = ({ children }) => {
  return (
    <ul className="list-disc list-outside marker:text-blue-400 ml-6">
      {children}
    </ul>
  )
}
const ol = ({ children }) => {
  return (
    <ol className="list-decimal list-outside marker:text-blue-400 ml-6">
      {children}
    </ol>
  )
}

const codeClass = 'text-sm font-mono text-pink-500'

const pre = ({ children }) => {
  return <pre className={`${codeClass}`}>{children}</pre>
}
const code = ({ children }) => {
  return <code className={`${codeClass}`}>{children}</code>
}
const inlineCode = ({ children }) => {
  return (
    <inlineCode className={`bg-gray-200 px-1.5 rounded-md ${codeClass}`}>
      {children}
    </inlineCode>
  )
}
const a = ({ children, href }) => {
  // TODO: only open new tab if link has different domain name
  return (
    <a target="_blank" href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  )
}
const blockquote = ({ children }) => {
  return (
    <blockquote className="border-l-4 border-blue-300 px-4 text-gray-500 my-4">
      {children}
    </blockquote>
  )
}

const tableClass = 'p-1'

const table = ({ children }) => {
  return (
    <table className={`border border-gray-400 ${tableClass}`}>{children}</table>
  )
}
const th = ({ children }) => {
  return (
    <th className={`bg-gray-200 border border-gray-400 ${tableClass}`}>
      {children}
    </th>
  )
}
const td = ({ children }) => {
  return <td className={`border border-gray-400 ${tableClass}`}>{children}</td>
}
const tr = ({ children }) => {
  return <tr className={`border border-gray-400 ${tableClass}`}>{children}</tr>
}

const MDXComponents = {
  h1,
  h2,
  table,
  td,
  th,
  tr,
  h3,
  ul,
  ol,
  pre,
  code,
  inlineCode,
  a,
  blockquote,
}

export default MDXComponents

/* MDX Components Reference
 *
 * p              Paragraph
 * h1             Heading 1       #
 * h2             Heading 2       ##
 * h3             Heading 3       ###
 * h4             Heading 4       ####
 * h5             Heading 5       #####
 * h6             Heading 6       ######
 * thematicBreak  Thematic break  ***
 * blockquote     Blockquote      >
 * ul             List            -
 * ol             Ordered list    1.
 * li             List item
 * table          Table           --- | --- | ---
 * tr             Table row       This | is | a | table row
 * td/th          Table cell
 * pre            Pre             ```pre```
 * code           Code            `code`
 * em             Emphasis        _emphasis_
 * strong         Strong          **strong**
 * delete         Delete          ~~strikethrough~~
 * code           InlineCode
 * hr             Break           ---
 * a              Link            <https://mdxjs.com> or [MDX](https://mdxjs.com)
 * img            Image           ![alt](https://mdx-logo.now.sh)
 */
