import Card from '@/components/cars/card'

export default function App() {
  return (
    <div>
      <header className="flex h-14 w-full items-center justify-between border-b">
        <h1 className="text-lg font-semibold text-title">Carros disponíveis</h1>
        <p className="text-sm text-light-gray">Total 12 carros</p>
      </header>
      <div className="4xl:grid-cols-table4Xl 2xl:grid-cols-table2Xl md:grid-cols-tableMd 3xl:grid-cols-table3Xl my-6 grid items-center gap-3">
        <Card />
      </div>
    </div>
  )
}
