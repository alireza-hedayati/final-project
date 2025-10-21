import Image from 'next/image'


function Banner() {
  return (
    <div className='h-[150px] relative mt-0 md:h-[200px] lg:h-[300px] xl:h-[350px]'>
      <Image src="/images/banner1.webp" alt="Banner" 
      fill/>
    </div>
  )
}

export default Banner