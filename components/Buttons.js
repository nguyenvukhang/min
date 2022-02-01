import Link from 'next/link'
import { VscArrowLeft } from '@/components/Icons'

const Button = ({ children, className, onClick, href = '/' }) => {
  return (
    <Link href={href} passHref>
      <div
        className={`select-none cursor-pointer hover:bg-gray-100 active:bg-gray-200 text-teal-600 border-teal-500 border w-fit rounded-md ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </Link>
  )
}

const Back = () => {
  return (
    <Button className="px-2 py-1 mb-4">
      <VscArrowLeft size={14} />
    </Button>
  )
}

export default Button
export { Back }
