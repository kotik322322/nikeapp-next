import Image from "next/image";
import Link from "next/link";
// import videoBg from "../assets/video/videobg.mp4"

export default function Home() {
  return (
    //   <div className="w-full h-screen flex justify-center items-center ">

    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="w-full h-screen object-cover"
    //   >
    //       <source src="/videos/videobg.mp4" type="video/mp4"/>
    //   </video>

    //   <div className="absolute h-full mx-auto flex flex-col justify-end items-center mb-40">

    //     <Link
    //       href={"/all"}
    //       className="px-20 py-4 rounded-full border  border-white text-white  bg-black bg-opacity-20 hover:px-40  hover:bg-opacity-40  hoverEffect"
    //     >
    //       Shop Now
    //     </Link>
    //   </div>
    // </div>

    <div className="relative w-full ">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/videobg.mp4" type="video/mp4" />
        </video>

        <div className="text-center absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link
            href={"/all"}
            className="px-10 md:px-20 md:hover:px-40 py-5 rounded-full border  border-white text-white  bg-black bg-opacity-20  hover:bg-opacity-40  hoverEffect"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
