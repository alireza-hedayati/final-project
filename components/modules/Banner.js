import Image from 'next/image'


function Banner() {
  return (
    <div className='h-[150px] relative mt-0 lg:h-[200px] xl:h-[250px]'>
      <Image src="/images/banner1.webp" alt="Banner" 
      fill/>
    </div>
  )
}

export default Banner