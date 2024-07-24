"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contacts() {
  const router = useRouter()

  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [pesan, setPesan] = useState();

  const handleClick = () => {
    router.push(`http://wa.me/62895801201195?text=Nama:%20${nama}%0AEmail:%20${email}%0APesan:%20${pesan}`)
  }
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[100vh] m-4">
      <h3 className="text-4xl font-bold text-[#222937] ">Kontak Kami</h3>
      <p className=" text-[#222937] mb-4">
        Apabila terdapat masukkan, kritik, atau saran, silahkan hubungi kami di
        bawah ini!
      </p>

      <div className="w-[70%] mx-auto flex flex-col">
        <label htmlFor="" className="text-left font-bold">
          Nama
        </label>
        <input
          type="text"
          name=""
          id=""
          className=" border-[2px] border-[#222937] outline-none rounded-sm p-1 mb-2"
          onChange={(e) => setNama(e.target.value)}
        />
        <label htmlFor="" className="text-left font-bold">
          Email
        </label>
        <input
          type="email"
          name=""
          id=""
          className=" border-[2px] border-[#222937] outline-none rounded-sm p-1 mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className="text-left font-bold">
          Masukkan, Kritik, atau Saran
        </label>
        <textarea className="border-[2px] border-[#222937] outline-none rounded-sm p-1 mb-2 h-60" onChange={e => setPesan(e.target.value)} />
        <button className="w-full bg-[#222937] p-1 rounded-sm text-white font-bold" onClick={handleClick}>
          Kirim
        </button>
      </div>
    </section>
  );
}
