import Container from "@/components/Container";
import React from "react";
import logo from "../assets/images/svg-icons/logo.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <Container className="w-full h-full">
      <Image
        src="/logo.svg"
        alt="img"
        width={700}
        height={700}
        className="opacity-10 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <h2 className="font-medium  ">Looks like you are lost</h2>
          <p>The page you are looking for not availible!</p>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
