const Divider = () => {
  return (
    <div>
      <hr />
    </div>
  )
}

function timestamp(e) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
  };
  const ts = e || new Date();
  return ts.toLocaleDateString("en-US", options);
}

const parse = (str) => {
  const [date, time] = str.split(' ')
  const [year, month, day] = date.split('/')
  const [hours, minutes] = time.split(':')

  const d = new Date(year, month, day, hours, minutes)

  return timestamp(d)
}

function NotesList({ source }) {
  return (
    <div>
      {source.map((p, i) => (
        <>
          <div className="my-10">
            <div className="font-head text-xs text-gray-500 mb-2">{`${parse(p.date)} #`}</div>
            <div>{p.content}</div>
          </div>
          {i < source.length - 1 ? <Divider /> : null}
        </>
      ))}
    </div>
  )
}
export default NotesList
