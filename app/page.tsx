import HeroCarosule from '@/components/HeroCarosule'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import React from 'react'
import { getAllProducts } from '@/lib/actions'
import { ProductCard } from '@/components/ProductCard'


const page = async () => {
  const allproducts= await getAllProducts();
  return (
   <>
   <section className='px-6 md:px-20 py-20 '>
    <div className='flex max-xl:flex-col gap-16'>
      <div className='flex flex-col justify-center'>
        <p className='small-text'>
          Starts Your Shopping Here:
          <Image
           src="/assets/icons/arrow-right.svg"
           alt='arrow-right'
           width={16}
           height={16}
          />
        </p>
        <h1 className='head-text'> Stay ahead, save more <span className='text-primary
        '>Price Tracker</span></h1>

        <p className='mt-6'>

          Powerful, self-serve product and growth analytics to help you convert, engage and retain more. 
        </p>
        <SearchBar/>
      </div>
     <HeroCarosule/>
    </div>
   </section>

   <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>
      <div className='flex flex-wrap gap-x-5 gap-y-11'>
      {
      allproducts?.map((product)=>(
        <ProductCard key={product._id} product={product}></ProductCard>
      ))
      }

      </div>
   </section>
   </>
  )
}

export default page