
export default function PageHeader({ title }) {
  return (
    <header className="h-52 page-header relative">
      <h1 className="font-bold text-6xl text-white relative z-10 p-6">{title}</h1>
    </header>
  )
}