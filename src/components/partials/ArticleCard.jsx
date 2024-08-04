import Image from "next/image"

export default function ArticleCard({ img, judul, deskripsi, link }) {
  return (
    <div className="border-[4px] rounded-md border-[#222937] overflow-hidden text-[#222937] hover:scale-[102%]">
      <Image src={img} className="rounded-sm w-full" />
      <h3 className="mt-2 text-lg font-bold p-1">{judul? judul : 'Ini Judul Default'}</h3>
      <p className="text-justify p-1">{deskripsi? deskripsi : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt recusandae obcaecati, error deleniti earum fugit laudantium quam, alias ipsa ea sint, fuga sapiente nisi ullam rerum voluptas repellendus at.'} </p>
      <a href={`/articles/${link}`} className="my-2 text-justify font-bold">Baca Selengkapnya ...</a>
    </div>
  )
}