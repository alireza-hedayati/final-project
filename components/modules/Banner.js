import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className='h-[150px] relative mt-5 lg:h-[200px] xl:h-[250px]'>
      <Image src="/images/banner1.png" alt="Banner" 
      fill/>
    </div>
  )
}

export default Banner