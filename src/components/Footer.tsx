import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
        <div className="flex flex-col md:flex-row justify-between gap-24">
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <Link href="/">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Souk</span>
                </Link>
                <p>Souk, souss massa, aga 80000, morocco.</p>
                <span className="font-semibold">trahimbrahim@gmail.com</span>
                <span className="font-semibold">+212 610 760 225</span>
                <div className="flex gap-6">
                    <Image src="/facebook.png" alt="facebook logo" width={16} height={16} />
                    <Image src="/instagram.png" alt="instagram logo" width={16} height={16} />
                    <Image src="/youtube.png" alt="youtube logo" width={16} height={16} />
                    <Image src="/pinterest.png" alt="pinterest logo" width={16} height={16} />
                    <Image src="/x.png" alt="X logo" width={16} height={16} />
                </div>
            </div>
            <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">SHOP</h1>
                <div className="flex flex-col gap-6">
                  <Link href="">Home Decor</Link>
                  <Link href="">Furniture</Link>
                  <Link href="">Lighting</Link>
                  <Link href="">Outdoor</Link>
                  <Link href="">All Products</Link>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">HELP</h1>
                <div className="flex flex-col gap-6">
                  <Link href="">Customer Service</Link>
                  <Link href="">My Account</Link>
                  <Link href="">Find a Store</Link>
                  <Link href="">Legal & Privacy</Link>
                  <Link href="">Gift Card</Link>
                </div>
            </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                <p>Be the first to get the latest news about trends, promotions, and much more!</p>
                <div className="flex">
                    <input 
                        type="text"
                        placeholder="Email Address"
                        className="p-4 w-3/4" 
                    />
                    <button className="w-1/4 bg-primary text-white">JOIN</button>
                </div>  
                <span className="font-semibold">Secure Payments</span>
                <div className="flex gap-4 justify-between">
                    <Image src="/discover.png" alt="discover" width={40} height={20} />
                    <Image src="/skrill.png" alt="skrill" width={40} height={20} />
                    <Image src="/paypal.png" alt="paypal" width={40} height={20} />
                    <Image src="/mastercard.png" alt="mastercard" width={40} height={20} />
                    <Image src="/visa.png" alt="visa" width={40} height={20} />
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Souk Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">MAD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer