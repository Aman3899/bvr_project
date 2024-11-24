"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/marketplace-hero.jpeg"
          alt="Marketplace Hero"
          width={1920}
          height={1080}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
          <h1 className="text-4xl font-bold mb-2">Discover, Trade, Connect</h1>
          <p className="text-lg mb-4">Explore the vibrant markets of Malawi</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
              Post Request
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700">
              List Market
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-6 px-4">
        <input
          type="text"
          placeholder="Search markets and products"
          className="w-full border rounded-lg py-2 px-4 text-gray-600 placeholder-gray-400"
        />
      </div>

      {/* Nearby Markets Section */}
      <div className="mt-8 px-4">
        <h2 className="text-xl font-bold mb-4">Nearby Markets</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Farmer's Market", image: "/marketplace-image.jpeg" },
            { name: "Crafts Market", image: "/marketplace-image.jpeg" },
            { name: "Fish Market", image: "/marketplace-image.jpeg" },
            { name: "Spice Market", image: "/marketplace-image.jpeg" },
            { name: "Clothing Market", image: "/marketplace-image.jpeg" },
            { name: "Food Market", image: "/marketplace-image.jpeg" },
          ].map((market, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg"
            >
              <Image
                src={market.image}
                alt={market.name}
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-md font-semibold">{market.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 py-4 bg-gray-100 text-center">
        <div className="flex justify-around text-blue-600 text-sm">
          <Link href="/home">
            <div className="flex flex-col items-center">
              <span>🏠</span>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/markets">
            <div className="flex flex-col items-center">
              <span>🛒</span>
              <p>Markets</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex flex-col items-center">
              <span>👤</span>
              <p>Profile</p>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}