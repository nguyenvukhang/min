const BsDashLg = ({ color, size, title, className }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size : '1rem'}
      width={size ? size : '1rem'}
      style={{ color }}
      className={className ? className : ''}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        stroke="none"
        strokeWidth="0"
        d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"
      ></path>
    </svg>
  )
}

const VscArrowLeft = ({ color, size, title, className }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size : '1rem'}
      width={size ? size : '1rem'}
      style={{ color }}
      className={className ? className : ''}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        stroke="none"
        strokeWidth="0"
        d="M7 3.093l-5 5V8.8l5 5 .707-.707-4.146-4.147H14v-1H3.56L7.708 3.8 7 3.093z"
      ></path>
    </svg>
  )
}

const BsArrowLeft = ({ color, size, title, className }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size : '1rem'}
      width={size ? size : '1rem'}
      style={{ color }}
      className={className ? className : ''}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        stroke="none"
        strokeWidth="0"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      ></path>
    </svg>
  )
}

const Divider = () => {
  return (
    <div className="flex justify-center text-gray-400 mt-8 mb-9">
      <BsDashLg />
    </div>
  )
}

export { BsDashLg, BsArrowLeft, VscArrowLeft, Divider }
