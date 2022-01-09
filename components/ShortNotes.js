import Button from '@/components/Buttons'

const ShortNotes = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="font-head">Short Notes</div>
        <Button
          className="ml-3 flex flex-col justify-center px-1.5 text-xs"
          href="/notes"
        >
          more
        </Button>
      </div>
    </div>
  )
}

export default ShortNotes
