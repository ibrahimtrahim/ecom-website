import ProductsList from "@/components/ProductsList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <main className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h2 className="text-2xl">Featured Products</h2>
        <ProductsList />
      </div>
    </main>
  )
}

export default HomePage
