const h1 = ({ children }) => {
  return <h1 className="text-2xl font-bold mt-8">{children}</h1>
}
const h2 = ({ children }) => {
  return <h1 className="text-xl font-semibold mt-8">{children}</h1>
}
const h3 = ({ children }) => {
  return <h1 className="text-lg font-semibold mt-6">{children}</h1>
}
const ul = ({ children }) => {
  return <ul className="list-disc list-outside ml-4">{children}</ul>
}
const li = ({ children }) => {
  return <li className="list-disc list-outside ml-4">{children}</li>
}
const pre = ({ children }) => {
  return <pre className="text-pink-400">{children}</pre>
}
const code = ({ children }) => {
  return <code className="text-pink-400">{children}</code>
}
const a = ({ children }) => {
  return <a className="text-blue-500 hover:underline">{children}</a>
}

const MDXComponents = {
  h1,
  h2,
  h3,
  ul,
  li,
  pre,
  code,
  a,
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
