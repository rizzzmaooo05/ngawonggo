"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import arc2 from '@/assets/images/articles/arc2.jpg'
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
        <h1 className=" text-2xl md:text-4xl font-bold">Bagaimana Balon Udara Bisa Terbang?</h1>
        <h3 className="md:text-xl">Penulis: Rizqon Maulana</h3>
        <h3 className="md:text-xl mb-2">Ditulis Pada: 4 Agustus 2024</h3>
        <Image src={arc2} className="w-full md:w-[50%] self-center  "/>
        <p className="text-justify md:text-xl indent-10">Balon udara terbang dengan memanfaatkan prinsip fisika dasar, yaitu hukum Archimedes. Hukum ini menjelaskan bahwa sebuah benda yang tenggelam sebagian atau seluruhnya dalam fluida akan mengalami gaya angkat ke atas yang sama dengan berat fluida yang dipindahkannya. Dalam kasus balon udara, fluida yang dimaksud adalah udara. Ketika balon diisi dengan gas yang lebih ringan dari udara sekitarnya, seperti helium atau udara panas, berat balon menjadi lebih ringan daripada berat volume udara yang dipindahkannya. Akibatnya, balon mengalami gaya angkat yang lebih besar daripada gaya gravitasi yang menariknya ke bawah, sehingga balon naik ke atas. Proses ini mirip dengan bagaimana kapal dapat mengapung di air, tetapi dalam hal ini, balon mengapung di udara.</p>
        <p className="text-justify md:text-xl indent-10">Jenis gas yang digunakan dalam balon udara sangat mempengaruhi kemampuannya untuk terbang. Gas seperti helium dan hidrogen digunakan karena lebih ringan dari udara. Helium, khususnya, adalah pilihan yang lebih aman karena tidak mudah terbakar dibandingkan dengan hidrogen. Selain itu, balon udara juga dapat diisi dengan udara panas, yang dihasilkan oleh pembakar yang ada di keranjang balon. Udara panas memiliki massa jenis yang lebih rendah daripada udara dingin, sehingga menyebabkan balon naik. Prinsip ini didasarkan pada konsep termodinamika, di mana peningkatan suhu gas menyebabkan molekul-molekulnya bergerak lebih cepat dan tersebar lebih luas, sehingga mengurangi massa jenis gas. Dengan mengontrol suhu udara di dalam balon, pilot dapat mengatur ketinggian balon udara.</p>
        <p className="text-justify md:text-xl indent-10">Suhu dan tekanan udara adalah faktor penting yang mempengaruhi kinerja balon udara. Suhu udara luar yang lebih rendah dapat membuat udara di dalam balon menjadi lebih kontras dalam hal densitas, sehingga meningkatkan gaya angkat. Namun, suhu yang sangat dingin juga dapat menyebabkan gas di dalam balon mengempis, sehingga mengurangi gaya angkat. Selain itu, tekanan atmosfer juga mempengaruhi penerbangan balon. Pada ketinggian yang lebih tinggi, tekanan atmosfer lebih rendah, sehingga balon dapat mengembang lebih banyak untuk menghasilkan gaya angkat yang cukup. Namun, jika balon terlalu banyak mengembang, ada risiko balon bisa pecah. Oleh karena itu, pilot harus memperhatikan suhu dan tekanan dengan cermat untuk menjaga keseimbangan dan keamanan penerbangan..</p>
        <p className="text-justify md:text-xl indent-10">Pengaturan ketinggian balon udara dilakukan dengan mengatur jumlah panas yang ada di dalam balon. Untuk naik, pilot menyalakan pembakar untuk memanaskan udara di dalam balon, sehingga menurunkan massa jenisnya dan meningkatkan gaya angkat. Sebaliknya, untuk turun, pilot bisa membiarkan udara di dalam balon mendingin atau membuka katup di bagian atas balon untuk melepaskan sebagian udara panas. Proses ini dikenal sebagai venting. Dengan melepaskan udara panas, berat balon bertambah, sehingga gaya gravitasi menjadi lebih dominan dan balon mulai turun. Mekanisme ini memungkinkan kontrol yang halus terhadap ketinggian, memungkinkan balon untuk tetap berada pada ketinggian tertentu atau melakukan manuver yang lebih kompleks.</p>
        <p className="text-justify md:text-xl indent-10">Keamanan adalah aspek kritis dalam penerbangan balon udara. Selain risiko kebakaran dari pembakar, ada juga risiko dari perubahan cuaca mendadak, turbulensi udara, dan pengaturan ketinggian yang tidak tepat. Untuk mengatasi ini, balon udara dilengkapi dengan berbagai peralatan keselamatan seperti alat pemadam kebakaran, parasut, dan sistem komunikasi dengan darat. Teknologi modern juga telah memperkenalkan sistem pemantauan cuaca dan GPS untuk membantu pilot dalam navigasi dan pengambilan keputusan. Selain itu, pelatihan dan pengalaman pilot sangat penting untuk menangani situasi darurat. Dengan kombinasi antara teknologi, prosedur keselamatan, dan keahlian pilot, penerbangan balon udara dapat menjadi pengalaman yang aman dan menyenangkan.</p>
        
        <button className="p-2 w-40 md:w-60 self-center bg-[#222937] text-white hover:font-bold rounded-md text-center my-2 md:text-xl" onClick={toHome}>Kembali Ke Beranda</button>
      </main>
    </>
  );
}
