import { FEATURED_PRODUCTS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const ProductsList = () => {
  return (
    <section className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {FEATURED_PRODUCTS.map((rug)=>(
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image 
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-5000" 
                        src={rug.img} 
                        alt={rug.title} 
                        fill 
                        sizes="25vw"  
                    />
                    <Image 
                        className="absolute object-cover rounded-md"
                        src={rug.imgcover} 
                        alt={rug.title} 
                        fill 
                        sizes="25vw"  
                    />
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-medium">{rug.title}</span>
                    <span className="font-semiblod">{rug.price}</span>
                </div>
                <p className="text-sm text-gray-500">{rug.description}</p>
                <button className="rounded-2xl ring-1  ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white ">
                    Add to Cart
                </button>
            </Link>
        ))}
    </section>
  )
}

export default ProductsList