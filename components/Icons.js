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

const Divider = () => {
  return (
    <div className='flex justify-center text-gray-400 mt-8 mb-9'>
      <BsDashLg />
    </div>
  )
}

export { BsDashLg, Divider }
