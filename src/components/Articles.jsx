import bg from "@/assets/images/bg.jpg";
import ArticleCard from "./partials/ArticleCard";

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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8 justify-center items-center">
          <ArticleCard img={bg} imgWidth={500} judul="Albert Einstein" />
          <ArticleCard img={bg} imgWidth={500} />
          <ArticleCard img={bg} imgWidth={500} />
          <ArticleCard img={bg} imgWidth={500} />
          <ArticleCard img={bg} imgWidth={500} />
          <ArticleCard img={bg} imgWidth={500} />
          <ArticleCard img={bg} imgWidth={500} />
          <ArticleCard img={bg} imgWidth={500} />
          <ArticleCard img={bg} imgWidth={500} />
        </div>
      </div>
    </section>
  );
}
