"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import arc1 from '@/assets/images/articles/arc1.jpg'
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
        <h1 className=" text-2xl md:text-4xl font-bold">Bagaimana Jembatan Dibangun?</h1>
        <h3 className="md:text-xl">Penulis: Rizqon Maulana</h3>
        <h3 className="md:text-xl mb-2">Ditulis Pada: 4 Agustus 2024</h3>
        <Image src={arc1} className="w-full md:w-[50%] self-center  "/>
        <p className="text-justify md:text-xl indent-10">Jembatan adalah struktur yang dibangun untuk menghubungkan dua titik yang dipisahkan oleh rintangan seperti sungai, lembah, atau jalan. Dari sudut pandang fisika, jembatan harus dirancang untuk menahan berbagai jenis beban dan gaya yang bekerja padanya. Beban ini termasuk berat sendiri jembatan (beban mati), beban kendaraan dan pejalan kaki (beban hidup), serta beban tambahan seperti angin dan gempa bumi. Prinsip dasar yang digunakan dalam desain jembatan adalah keseimbangan gaya, di mana gaya-gaya yang bekerja harus diseimbangkan agar jembatan tetap stabil. Selain itu, jembatan harus dirancang dengan mempertimbangkan kekuatan material yang digunakan, agar tidak mudah rusak atau runtuh. Konsep tekanan, tegangan, dan regangan dalam fisika juga sangat penting dalam perencanaan dan konstruksi jembatan. Pemahaman ini membantu insinyur memastikan bahwa jembatan dapat menahan beban dan gaya yang terjadi selama masa penggunaannya.</p>
        <p className="text-justify md:text-xl indent-10">Ada berbagai jenis jembatan yang digunakan, seperti jembatan balok, jembatan lengkung, jembatan gantung, dan jembatan kabel pancang. Masing-masing jenis jembatan menggunakan prinsip fisika yang berbeda untuk mendistribusikan beban dan gaya. Misalnya, jembatan balok sederhana bekerja dengan prinsip balok yang diletakkan di atas dua penyangga, di mana beban ditransfer ke penyangga melalui lenturan balok. Sementara itu, jembatan lengkung menggunakan prinsip kompresi, di mana gaya tekan yang bekerja pada lengkungan ditransfer ke pondasi di kedua ujung jembatan. Jembatan gantung dan jembatan kabel pancang, di sisi lain, menggunakan kabel yang bekerja dengan prinsip tegangan untuk mendistribusikan beban. Kabel-kabel ini mengalihkan beban ke menara dan akhirnya ke pondasi. Setiap jenis jembatan dipilih berdasarkan kondisi lokasi dan beban yang akan ditanggung, serta keefektifan struktur dalam menahan gaya-gaya yang bekerja.</p>
        <p className="text-justify md:text-xl indent-10">Pemilihan material adalah aspek penting dalam konstruksi jembatan, karena material yang digunakan harus memiliki kekuatan yang cukup untuk menahan beban dan gaya. Material umum yang digunakan termasuk beton, baja, dan kayu. Beton sering digunakan karena kekuatannya dalam menahan gaya tekan, sementara baja digunakan karena kekuatannya dalam menahan gaya tarik. Kombinasi keduanya sering ditemukan dalam jembatan modern, seperti jembatan beton bertulang yang menggabungkan kekuatan beton dan baja. Selain itu, material juga harus tahan terhadap korosi dan cuaca, terutama untuk jembatan yang berada di lingkungan yang keras. Material baru seperti komposit polimer dan serat karbon juga mulai digunakan karena ringan dan kuat. Pemahaman tentang sifat material ini adalah bagian dari studi fisika bahan, yang membantu insinyur memilih material yang tepat untuk kondisi tertentu. Kekuatan dan durabilitas material sangat menentukan umur panjang dan keamanan jembatan.</p>
        <p className="text-justify md:text-xl indent-10">Pemilihan material adalah aspek penting dalam konstruksi jembatan, karena material yang digunakan harus memiliki kekuatan yang cukup untuk menahan beban dan gaya. Material umum yang digunakan termasuk beton, baja, dan kayu. Beton sering digunakan karena kekuatannya dalam menahan gaya tekan, sementara baja digunakan karena kekuatannya dalam menahan gaya tarik. Kombinasi keduanya sering ditemukan dalam jembatan modern, seperti jembatan beton bertulang yang menggabungkan kekuatan beton dan baja. Selain itu, material juga harus tahan terhadap korosi dan cuaca, terutama untuk jembatan yang berada di lingkungan yang keras. Material baru seperti komposit polimer dan serat karbon juga mulai digunakan karena ringan dan kuat. Pemahaman tentang sifat material ini adalah bagian dari studi fisika bahan, yang membantu insinyur memilih material yang tepat untuk kondisi tertentu. Kekuatan dan durabilitas material sangat menentukan umur panjang dan keamanan jembatan.</p>
        <p className="text-justify md:text-xl indent-10">Setelah jembatan dibangun, pemeliharaan dan inspeksi rutin sangat penting untuk memastikan keamanannya. Ini termasuk pemeriksaan visual terhadap keretakan, korosi, dan deformasi yang mungkin terjadi seiring waktu. Selain itu, teknologi modern seperti pemantauan struktur menggunakan sensor juga digunakan untuk mendeteksi perubahan kecil dalam getaran, regangan, atau suhu yang dapat mengindikasikan potensi masalah. Pemahaman tentang mekanika kerusakan dan kelelahan material adalah bagian penting dari fisika yang diterapkan dalam pemeliharaan jembatan. Dengan data yang diperoleh dari inspeksi dan pemantauan, insinyur dapat merencanakan perbaikan atau penguatan sebelum kerusakan menjadi serius. Pemeliharaan yang baik tidak hanya memperpanjang umur jembatan tetapi juga memastikan keselamatan pengguna. Oleh karena itu, kombinasi antara desain yang baik dan pemeliharaan yang teratur adalah kunci untuk keberlanjutan dan keamanan jembatan.</p>
        
        <button className="p-2 w-40 md:w-60 self-center bg-[#222937] text-white hover:font-bold rounded-md text-center my-2 md:text-xl" onClick={toHome}>Kembali Ke Beranda</button>
      </main>
    </>
  );
}
