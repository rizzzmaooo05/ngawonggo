"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function AboutUsCard({ jabatan, imgSrc, visibility, usernameIG, nama, fakultas }) {
  const router = useRouter()

  function handleClick() {
    console.log(usernameIG)
    router.push(`http://instagram.com/${usernameIG}`)
  }
  
  return (
    <>
      <div
        className={`border-[2px] rounded-md border-white overflow-hidden text-white hover:scale-[101%] cursor-pointer ${
          !visibility ? "visible" : visibility
        } relative`} onClick={handleClick}
      >
        <h3 className="bg-white text-[#222937] p-1 w-fit font-bold absolute">
          {jabatan}
        </h3>
        <Image src={imgSrc} alt="profile-picture" className="w-full h-[300px] object-fill" />
        <div className="bg-white text-[#222937] absolute top-60 flex flex-col items-center w-full">
          <h3 className="text-center mt-1 font-semibold">{nama}</h3>
          <h3 className="text-center ">{fakultas}</h3>
        </div>
      </div>
    </>
  );
}
