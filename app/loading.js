export default function Loading() {
  return (
    <div>
      {Array(30)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="item-skeleton" />
        ))}
    </div>
  );
}
