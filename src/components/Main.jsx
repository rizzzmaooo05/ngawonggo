import bg from '@/assets/images/bg.jpg'
import Image from 'next/image'

export default function Main() {
  return (
    <main className="bg-[#222937] h-[calc(100vh-150px)] md:h-[calc(100vh-100px)] flex justify-center items-center relative">
      <Image src={bg} className='md:visible invisible w-full h-[calc(100vh-80px)] md:object-cover absolute' />
      <div className='w-[65%] md:relative  flex justify-center items-center flex-col gap-5 md:ml-5'>
        <p className='text-4xl text-center text-white'>`&quot;`Tingkatkan literasi sains, wujudkan masa depan cerah! Pengetahuan adalah kekuatan, sains adalah kunci kemajuan.`&quot;`</p>
        <p className='text-2xl font-bold text-white'>Sains Ngawonggo - 2024</p>
      </div>
    </main>
  )
}