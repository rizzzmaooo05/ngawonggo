"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import arc3 from '@/assets/images/articles/arc3.jpg'
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()

  function toHome() {
    router.push('/')
  }
  return (
    <>
      <Navbar/>
      <main className="relative top-[180px] md:top-[110px] px-4 md:px-8 flex flex-col">
        <h1 className=" text-2xl md:text-4xl font-bold">Mengapa Burung Tidak Tersetrum Saat Hinggap di Kabel Listrik?</h1>
        <h3 className="md:text-xl">Penulis: Rizqon Maulana</h3>
        <h3 className="md:text-xl mb-2">Ditulis Pada: 4 Agustus 2024</h3>
        <Image src={arc3} className="w-full md:w-[50%] self-center  "/>
        <p className="text-justify md:text-xl indent-10">Listrik adalah aliran muatan listrik yang melalui konduktor, seperti kabel. Aliran ini terjadi karena adanya perbedaan potensial listrik antara dua titik, yang menciptakan medan listrik dan memaksa muatan bergerak. Potensial listrik dapat diibaratkan sebagai tekanan yang mendorong aliran arus listrik. Untuk listrik mengalir, diperlukan sirkuit lengkap, yaitu jalur tertutup dari sumber daya listrik melalui konduktor dan kembali ke sumber daya. Dalam konteks jaringan listrik, kabel biasanya memiliki tegangan yang sangat tinggi untuk mentransmisikan energi listrik jarak jauh. Kabel-kabel ini biasanya dipasang di atas tanah dengan isolasi yang baik untuk mencegah kehilangan energi dan melindungi dari kontak langsung.</p>
        <p className="text-justify md:text-xl indent-10">Ketika burung hinggap di satu kabel listrik, kedua kakinya menyentuh bagian kabel yang sama. Karena kabel tersebut berada pada potensial listrik yang sama di sepanjang panjangnya, tidak ada perbedaan potensial antara kedua kaki burung. Dalam fisika, arus listrik mengalir dari titik dengan potensial tinggi ke titik dengan potensial rendah. Jika tidak ada perbedaan potensial antara dua titik, maka tidak ada arus yang akan mengalir. Oleh karena itu, meskipun burung menyentuh kabel yang membawa arus listrik, tidak ada arus listrik yang mengalir melalui tubuhnya. Hal ini membuat burung tidak tersetrum saat hinggap di kabel listrik.</p>
        <p className="text-justify md:text-xl indent-10">Agar burung tidak tersetrum, penting untuk memahami bahwa tubuh burung tidak boleh menyentuh kabel lain atau benda yang terhubung dengan tanah, seperti tiang listrik atau bagian logam lain. Jika burung menyentuh kabel lain dengan potensial yang berbeda atau menyentuh tanah, arus listrik akan menemukan jalur untuk mengalir melalui tubuh burung, yang dapat menyebabkan sengatan listrik. Arus ini bisa sangat berbahaya karena tubuh burung, seperti tubuh manusia, adalah konduktor listrik yang baik. Isolasi yang baik dari kabel dan jarak yang cukup antara kabel dan benda lain adalah faktor penting yang mencegah terjadinya kontak yang tidak diinginkan ini.</p>
        <p className="text-justify md:text-xl indent-10">Perbedaan potensial, atau tegangan, adalah faktor utama yang menentukan apakah arus listrik akan mengalir melalui suatu objek. Semakin besar perbedaan potensial antara dua titik, semakin besar kemungkinan arus listrik mengalir melalui objek yang menghubungkan kedua titik tersebut. Dalam kasus burung yang hinggap di kabel listrik, tidak adanya perbedaan potensial antara kaki-kakinya berarti tidak ada dorongan bagi arus listrik untuk mengalir. Namun, jika burung tersebut hinggap di dua kabel dengan tegangan yang berbeda, arus listrik akan mengalir melalui tubuhnya. Itulah sebabnya, kita sering melihat isolator pada tiang listrik untuk menjaga kabel-kabel pada posisi yang aman dan mencegah kontak yang tidak disengaja.</p>
        <p className="text-justify md:text-xl indent-10">Prinsip yang sama berlaku untuk manusia ketika bekerja di sekitar jaringan listrik. Pekerja listrik harus berhati-hati untuk tidak menyentuh kabel listrik dengan tangan atau alat yang terhubung ke tanah. Mereka sering menggunakan peralatan pelindung diri dan peralatan isolasi untuk mencegah aliran arus listrik melalui tubuh mereka. Selain itu, banyak peralatan listrik modern dirancang dengan fitur keselamatan yang mencegah kontak langsung dengan bagian yang aktif secara elektrik. Memahami konsep perbedaan potensial dan arus listrik adalah kunci untuk mencegah kecelakaan listrik. Hal ini juga menggarisbawahi pentingnya pendidikan dan pelatihan keselamatan listrik untuk mencegah cedera dan kematian akibat sengatan listrik.</p>
        
        <button className="p-2 w-40 md:w-60 self-center bg-[#222937] text-white hover:font-bold rounded-md text-center my-2 md:text-xl" onClick={toHome}>Kembali Ke Beranda</button>
      </main>
    </>
  );
}
