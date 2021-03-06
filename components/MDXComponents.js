const fonts = {
  head: 'font-head tracking-normal',
  code: 'text-sm font-mono text-pink-500',
}

const tags = {
  h1: `${fonts.head} text-2xl mt-8 mb-5`,
  subtitle: `font-sans text-gray-400 text-sm mb-6`,
  h2: `${fonts.head} text-2xl mt-8 mb-5`,
  h3: `${fonts.head} text-2xl mt-8 mb-5`,
  a: 'hover:underline text-teal-500',
  ul: 'list-disc list-outside marker:text-teal-500 ml-6 mb-2',
  ol: 'list-decimal list-outside marker:text-teal-500 ml-6',
  inlineCode: `bg-gray-200 px-1.5 rounded-md ${fonts.code}`,
  blockquote: 'border-l-4 border-gray-200 px-4 text-gray-500 my-4',
  table: 'p-1 border border-gray-400 mt-3 mb-4',
  th: 'p-1 bg-gray-200 border border-gray-400',
  td: 'p-1 border border-gray-400',
  tr: 'p-1 border border-gray-400',
  pre: `${fonts.code}`,
  code: `${fonts.code}`,
}

const h1 = ({ children }) => {
  const anchor = children.toLowerCase().replace(/ /g, '-')
  const [main, sub] = children.split('|')
  return (
    <div className={tags.h1}>
      <h1 id={anchor} className="mb-1">
        {main}
      </h1>
      <h6 className={tags.subtitle}>{sub}</h6>
    </div>
  )
}

const h2 = ({ children }) => {
  const anchor = children.toLowerCase().replace(/ /g, '-')
  return (
    <h2 id={anchor} className={tags.h2}>
      {children}
    </h2>
  )
}

const a = ({ children, href = '' }) => {
  const props =
    href[0] === '#'
      ? {
          href: `#${href.split('#')[1].toLowerCase().replace(/ /g, '-')}`,
        }
      : {
          target: '_blank',
          href,
        }
  return (
    <a {...props} className={`${tags.a} ${props.color}`}>
      {children}
    </a>
  )
}

const h3 = ({ children }) => {
  return <h3 className={tags.h3}>{children}</h3>
}

const ul = ({ children }) => {
  return <ul className={tags.ul}>{children}</ul>
}

const ol = ({ children }) => {
  return <ol className={tags.ol}>{children}</ol>
}

const pre = ({ children }) => {
  return <pre className={`${tags.pre}`}>{children}</pre>
}

const code = ({ children }) => {
  return <code className={`${tags.code}`}>{children}</code>
}

const inlineCode = ({ children }) => {
  return <inlineCode className={`${tags.inlineCode}`}>{children}</inlineCode>
}

const blockquote = ({ children }) => {
  return <blockquote className={tags.blockquote}>{children}</blockquote>
}

const table = ({ children }) => {
  return <table className={tags.table}>{children}</table>
}

const th = ({ children }) => {
  return <th className={tags.th}>{children}</th>
}

const td = ({ children }) => {
  return <td className={tags.td}>{children}</td>
}

const tr = ({ children }) => {
  return <tr className={tags.tr}>{children}</tr>
}

const MDXComponents = {
  a,
  blockquote,
  code,
  h1,
  h2,
  h3,
  inlineCode,
  ol,
  pre,
  table,
  td,
  th,
  tr,
  ul,
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
