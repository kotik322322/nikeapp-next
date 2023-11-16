import Container from "@/components/Container";
import React from "react";
import logo from "../assets/images/svg-icons/logo.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <Container className="relative">
      <Image
        src="/logo.svg"
        alt="img"
        width={800}
        height={800}
        className="opacity-10"
          />
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <h2>Looks like you are lost</h2>
          <p>The page you are looking for not availible!</p>
        </div>
      </div>
    </Container>

    // <Container className="w-full min-h-screen relative">
    //   <Image
    //     src="/logo.svg"
    //     alt="img"
    //     width={800}
    //     height={800}
    //     className="opacity-10 absolute top-0 left-0 w-full h-full"
    //   />
    //   <div className="w-full h-full flex  items-center justify-center ">
    //     <h2>Looks like you are lost</h2>
    //     <p>The page you are looking for not availible!</p>
    //   </div>
    // </Container>
  );
};

export default NotFound;
