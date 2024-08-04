import bg from '@/assets/images/bg.jpg'
import Image from 'next/image'

export default function Main() {
  return (
    <main className="bg-[#222937] h-[100vh] flex justify-center items-center relative mb-4 w-full">
      <Image src={bg} className='md:visible invisible w-full md:object-cover absolute' />
      <div className='w-[65%] md:relative  flex justify-center items-center flex-col gap-5 md:ml-5'>
        <p className='text-2xl md:text-4xl text-center text-white'>Tingkatkan literasi sains, wujudkan masa depan cerah! Pengetahuan adalah kekuatan, sains adalah kunci kemajuan.</p>
        <p className='text-xl md:text-2xl font-bold text-white'>Sains Ngawonggo - 2024</p>
      </div>
    </main>
  )
}