"use client"

import Groq from "groq-sdk";
import { useState } from "react";

import ArticleCard from "./partials/ArticleCard";
import arc1 from "@/assets/images/articles/arc1.jpg";
import arc2 from "@/assets/images/articles/arc2.jpg";
import arc3 from "@/assets/images/articles/arc3.jpg";
import arc4 from "@/assets/images/articles/arc4.jpg";

export default function Articles() {
  const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true
  });

  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function getGroqChatCompletion() {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `${prompt}. Jawab dalam bahasa Indonesia. Sebelum menjawab pertanyaan tersebut, awalilah dengan kalimat "Terima kasih sudah bertanya, Ngawonggo Bot akan berusaha menjawab pertanyaanmu sebaik mungkin" setelah itu paparkan jawaban dari pertanyaan yang diajukan`,
        },
      ],
      model: "llama3-8b-8192",
    });
    const answer = await response.choices[0]?.message.content
    setAnswer(answer)
  }
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
          <ArticleCard
            img={arc1}
            imgWidth={500}
            judul="Bagaimana Jembatan Dibangun?"
            deskripsi="Pembangunan jembatan melibatkan pemahaman mendalam tentang berbagai prinsip fisika, mulai dari desain struktural hingga pemilihan material dan analisis dinamika. Pemahaman ini memungkinkan insinyur untuk merancang jembatan yang aman dan tahan lama, serta memastikan pemeliharaannya melalui inspeksi rutin dan pemantauan kondisi struktural."
            link={1}
          />
          <ArticleCard
            img={arc2}
            imgWidth={500}
            judul="Bagaimana Balon Udara Bisa Terbang?"
            deskripsi="Balon udara terbang dengan prinsip gaya angkat dari gas yang lebih ringan daripada udara sekitarnya, seperti helium atau udara panas. Dengan mengatur suhu gas dalam balon, ketinggian balon dapat diatur, dan berbagai teknologi serta prosedur keselamatan memastikan penerbangan yang aman."
            link={2}
          />
          <ArticleCard
            img={arc3}
            imgWidth={500}
            judul="Mengapa Burung Tidak Tersetrum Saat Hinggap di Kabel Listrik ?"
            deskripsi="Burung tidak tersetrum saat hinggap di kabel listrik karena tidak ada perbedaan potensial antara kedua kakinya, sehingga tidak ada arus listrik yang mengalir melalui tubuhnya. Selama burung atau objek lain tidak menyentuh kabel lain atau benda yang terhubung dengan tanah, risiko tersetrum dapat dihindari."
            link={3}
          />
          <ArticleCard
            img={arc4}
            imgWidth={500}
            judul="Mengapa Kapal Pesiar Besar Bisa Mengapung di Laut?"
            deskripsi="Kapal pesiar bisa mengapung di laut karena prinsip fisika gaya apung, yang terjadi ketika berat air yang dipindahkan oleh kapal lebih besar dari berat kapal itu sendiri. Desain kapal dengan bagian dalam yang berongga dan pusat gravitasi yang rendah memastikan stabilitas, sementara sistem ballast dan stabilisator membantu menyesuaikan kedalaman dan kenyamanan selama pelayaran."
            link={3}
          />
        </div>
      </div>
      <div className="py-4 text-center flex flex-col justify-center items-center p-8">
        <h1 className=" text-4xl font-bold text-[#222937]">Tanya Ngawonggo</h1>
        <p>
          Disini kamu akan dapat bertanya apapun, utamanya terkait sains dan
          akan langsung dijawab oleh bot yang bernama Ngawonggo Bot.
        </p>
        <textarea className="border-[2px] border-[#222937] outline-none rounded-sm p-1 mb-2 h-60 w-full" onChange={(e) => setPrompt(e.target.value)}/>
        <button className="w-full bg-[#222937] p-1 rounded-sm text-white font-bold mb-4" onClick={getGroqChatCompletion}>
          Kirim
        </button>
        <p className="self-start text-justify">{answer}</p>
      </div>
    </section>
  );
}
