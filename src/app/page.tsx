import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden"  >
      <div className="" style={{ height: 'calc(100vh - 80px)' }}>
        <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/videobg.mp4" type="video/mp4" />
      </video>
      </div>
      <div className=" text-center absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <Link
          href={"/products/"}
          className="px-10 py-4 md:px-20 md:hover:px-40 items-center justify-center rounded-full border  border-white text-white  bg-black bg-opacity-20  hover:bg-opacity-40  hoverEffect"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
