"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import arc4 from '@/assets/images/articles/arc4.jpg'
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
        <h1 className=" text-2xl md:text-4xl font-bold">Mengapa Kapal Pesiar Besar Bisa Mengapung di Laut?</h1>
        <h3 className="md:text-xl">Penulis: Rizqon Maulana</h3>
        <h3 className="md:text-xl mb-2">Ditulis Pada: 4 Agustus 2024</h3>
        <Image src={arc4} className="w-full md:w-[50%] self-center  "/>
        <p className="text-justify md:text-xl indent-10">Kapal pesiar yang sangat besar bisa mengapung di laut karena prinsip fisika yang dikenal sebagai hukum Archimedes. Hukum ini menyatakan bahwa suatu benda yang terendam dalam fluida (cairan atau gas) akan mengalami gaya angkat ke atas yang besarnya sama dengan berat fluida yang dipindahkan oleh benda tersebut. Dalam kasus kapal pesiar, ketika kapal berada di air, kapal akan menggantikan sejumlah air yang sama dengan volume bagian kapal yang terendam. Gaya angkat ini bekerja melawan gaya gravitasi yang menarik kapal ke bawah, sehingga kapal bisa mengapung. Kunci utama dari prinsip ini adalah bahwa berat air yang dipindahkan harus lebih besar atau sama dengan berat kapal agar kapal dapat mengapung di permukaan air.</p>
        <p className="text-justify md:text-xl indent-10">Desain kapal pesiar sangat berperan dalam kemampuannya untuk mengapung. Meskipun kapal pesiar terbuat dari bahan-bahan yang lebih padat daripada air, seperti baja, kapal didesain dengan bagian dalam yang berongga. Ini membuat rata-rata densitas kapal menjadi lebih kecil daripada densitas air laut. Densitas, atau kerapatan, adalah massa per satuan volume suatu benda. Air memiliki densitas sekitar 1 gram per cm³, dan kapal pesiar harus memiliki densitas rata-rata yang lebih rendah agar dapat mengapung. Bagian dalam kapal yang berongga, termasuk ruangan penumpang, area kargo, dan tangki bahan bakar, membantu menurunkan densitas keseluruhan kapal. Selain itu, bentuk lambung kapal dirancang untuk memberikan stabilitas dan mengurangi hambatan air, membantu kapal bergerak lebih efisien di permukaan air.</p>
        <p className="text-justify md:text-xl indent-10">Stabilitas kapal pesiar sangat penting untuk menjaga kapal tetap tegak dan aman di laut. Stabilitas ini dipengaruhi oleh distribusi beban dan desain lambung kapal. Kapal pesiar dirancang dengan pusat gravitasi yang rendah, yang berarti sebagian besar berat kapal terletak di bagian bawah kapal. Hal ini membantu mencegah kapal terbalik atau miring secara berlebihan. Selain itu, lambung kapal berbentuk V atau U membantu mendistribusikan air yang dipindahkan secara merata, yang juga berkontribusi pada stabilitas. Selama pelayaran, distribusi beban di dalam kapal harus dikelola dengan hati-hati, termasuk penumpang, kargo, dan bahan bakar, untuk mencegah ketidakseimbangan yang dapat menyebabkan kapal miring atau bahkan tenggelam.</p>
        <p className="text-justify md:text-xl indent-10">Gaya apung yang dialami oleh kapal pesiar tidak hanya menahan kapal di permukaan air, tetapi juga memberikan pengaruh pada pergerakan dan kenyamanan kapal. Gaya apung yang stabil membuat kapal tetap berada pada posisi tertentu di permukaan air, meskipun ada gangguan dari gelombang atau arus laut. Kapal pesiar juga dilengkapi dengan sistem ballast, yaitu tangki yang dapat diisi dengan air untuk menambah atau mengurangi berat kapal. Sistem ini memungkinkan kapal untuk mengatur kedalaman dan stabilitas di laut. Selain itu, kapal pesiar sering dilengkapi dengan sistem stabilisator yang berfungsi untuk mengurangi goyangan yang disebabkan oleh gelombang, sehingga memberikan kenyamanan bagi penumpang.</p>
        <p className="text-justify md:text-xl indent-10">Kondisi lingkungan laut, seperti gelombang, arus, dan cuaca, juga mempengaruhi kemampuan kapal pesiar untuk mengapung dan bergerak. Gelombang yang besar dapat menyebabkan kapal bergoyang, tetapi desain kapal dan sistem stabilisator membantu mengurangi dampak ini. Arus laut juga dapat mempengaruhi navigasi kapal, sehingga kapten dan kru harus memperhatikan kondisi arus saat merencanakan rute pelayaran. Cuaca ekstrem, seperti badai, dapat meningkatkan risiko untuk kapal pesiar, sehingga kapal-kapal ini dilengkapi dengan teknologi navigasi canggih dan sistem komunikasi untuk menghindari bahaya. Semua faktor ini menunjukkan bahwa meskipun kapal pesiar besar, kemampuan mereka untuk mengapung dan beroperasi dengan aman sangat bergantung pada kombinasi desain fisik, teknologi, dan pemahaman tentang lingkungan laut.</p>
        
        <button className="p-2 w-40 md:w-60 self-center bg-[#222937] text-white hover:font-bold rounded-md text-center my-2 md:text-xl" onClick={toHome}>Kembali Ke Beranda</button>
      </main>
    </>
  );
}
