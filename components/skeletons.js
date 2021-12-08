export default function Skeletons() {
  // Generating 30 skeletons to match the size of the list.
  return (
    <div>
      {Array(30)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} />
        ))}
    </div>
  )
}

function Skeleton() {
  return <div className='item-skeleton' />
}
