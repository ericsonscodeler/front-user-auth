"use client"

import Image from "next/image";
import Travel from "@/assets/travel.jpg";

import { useState } from "react";
import SignUp from "@/components/signup";
import SignIn from "@/components/signin";

const Pages: React.FC = () => {
  const [login,setLogin] = useState<boolean>(false)

  return (
    <>
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-full hidden lg:block">
          <Image src={Travel} alt="travel" layout="fill" objectFit="cover" />
        </div>
        {login ? (
          <SignIn setLogin={setLogin}/>
        ) : (
          <SignUp setLogin={setLogin}/>
        )}
      </div>
    </>
  )
};

export default Pages;
