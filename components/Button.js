import Link from 'next/link'

const Button = ({ children, className, onClick, href = '/' }) => {
  return (
    <Link href={href}>
      <div
        className={`select-none cursor-pointer hover:bg-gray-100 active:bg-gray-200 active:drop-shadow-md text-teal-600 border-teal-500 border w-fit px-2 py-1 rounded-md ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
