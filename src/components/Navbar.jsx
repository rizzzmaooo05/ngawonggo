import Image from "next/image";
import imgPath from "@/assets/images/logo-magelang.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight: "900"})

export default function Navbar() {
  return (
    <nav className="flex flex-col bg-[#222937] text-white px-10 py-4 justify-between items-center gap-2 md:flex-row h-[170px] md:h-[100px] w-full">
      <a href="/" className="flex justify-center items-center gap-3">
        <Image src={imgPath} width={40} />
        <div>
          <h1 className={`text-lg font-bold ${poppins.className}`}>Sains Ngawonggo</h1>
          <p className="text-sm md:text-md">Mengenal sains dengan lebih seru</p>
        </div>
      </a>
      <ul className="flex gap-10 font-bold justify-center items-center text-center text-sm md:text-md">
        <a href="/" className="hover:border-b-[2px] hover:border-b-white p-4 transition-all">
          <li>Beranda</li>
        </a>
        <a href="/#article" className="hover:border-b-[2px] hover:border-b-white p-4 transition-all">
          <li>Artikel</li>
        </a>
        <a href="/" className="hover:border-b-[2px] hover:border-b-white p-4 transition-all">
          <li>Tentang Kami</li>
        </a>
        <a href="/" className="hover:border-b-[2px] hover:border-b-white p-4 transition-all">
          <li>Kontak Kami</li>
        </a>
      </ul>
    </nav>
  );
}
