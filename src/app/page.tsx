import Image from 'next/image'
import Link from 'next/link'
// import videoBg from "../assets/video/videobg.mp4"


export default function Home() {
   
  return (
      
    <div className="w-full h-screen flex justify-center items-center ">

    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-screen object-cover"
    >
        <source src="/videos/videobg.mp4" type="video/mp4"/>
    </video>

    <div className="absolute h-full mx-auto flex flex-col justify-end items-center mb-40">

      <Link
        href={"/all"}
        className="px-20 py-4 rounded-full border  border-white text-white  bg-black bg-opacity-20 hover:px-40  hover:bg-opacity-40  hoverEffect"
      >
        Shop Now
      </Link>
    </div>
  </div>
  )
}
