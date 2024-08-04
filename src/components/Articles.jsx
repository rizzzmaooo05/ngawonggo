import ArticleCard from "./partials/ArticleCard";
import arc1 from "@/assets/images/articles/arc1.jpg";
import arc2 from "@/assets/images/articles/arc2.jpg";
import arc3 from "@/assets/images/articles/arc3.jpg";
import arc4 from "@/assets/images/articles/arc4.jpg";


export default function Articles() {
  return (
    <section
      className="w-full min-h-[100vh] flex flex-col justify-center items-center text-center"
      id="article"
    >
      <div className="py-4 text-center flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-bold text-[#222937]">
          Artikel Literasi Sains
        </h1>
        <p>Disini kamu akan tahu penting dan serunya literasi sains.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 auto-rows-max items-center">
          <ArticleCard img={arc1} imgWidth={500} judul="Bagaimana Jembatan Dibangun?" deskripsi="Pembangunan jembatan melibatkan pemahaman mendalam tentang berbagai prinsip fisika, mulai dari desain struktural hingga pemilihan material dan analisis dinamika. Pemahaman ini memungkinkan insinyur untuk merancang jembatan yang aman dan tahan lama, serta memastikan pemeliharaannya melalui inspeksi rutin dan pemantauan kondisi struktural." link={1}/>
          <ArticleCard img={arc2} imgWidth={500} judul="Bagaimana Balon Udara Bisa Terbang?" deskripsi="Balon udara terbang dengan prinsip gaya angkat dari gas yang lebih ringan daripada udara sekitarnya, seperti helium atau udara panas. Dengan mengatur suhu gas dalam balon, ketinggian balon dapat diatur, dan berbagai teknologi serta prosedur keselamatan memastikan penerbangan yang aman." link={2}/>
          <ArticleCard img={arc3} imgWidth={500} judul="Mengapa Burung Tidak Tersetrum Saat Hinggap di Kabel Listrik ?" deskripsi="Burung tidak tersetrum saat hinggap di kabel listrik karena tidak ada perbedaan potensial antara kedua kakinya, sehingga tidak ada arus listrik yang mengalir melalui tubuhnya. Selama burung atau objek lain tidak menyentuh kabel lain atau benda yang terhubung dengan tanah, risiko tersetrum dapat dihindari." link={3}/>
          <ArticleCard img={arc4} imgWidth={500} judul="Mengapa Kapal Pesiar Besar Bisa Mengapung di Laut?" deskripsi="Kapal pesiar bisa mengapung di laut karena prinsip fisika gaya apung, yang terjadi ketika berat air yang dipindahkan oleh kapal lebih besar dari berat kapal itu sendiri. Desain kapal dengan bagian dalam yang berongga dan pusat gravitasi yang rendah memastikan stabilitas, sementara sistem ballast dan stabilisator membantu menyesuaikan kedalaman dan kenyamanan selama pelayaran." link={3}/>
        </div>
      </div>
    </section>
  );
}
