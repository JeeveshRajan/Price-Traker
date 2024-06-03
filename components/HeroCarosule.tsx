"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const HeroCarosule = () => {
    const heroImg=[
        {imgUrl:"/assets/images/hero-1.svg", alt:"smartWatch"},
        {imgUrl:"/assets/images/hero-2.svg", alt:"bag"},
        {imgUrl:"/assets/images/hero-3.svg", alt:"lamp"},
        {imgUrl:"/assets/images/hero-4.svg", alt:"oven"},
        {imgUrl:"/assets/images/hero-5.svg", alt:"nothing"},
    ]
  return (
    <div className='hero-carousel'>
        <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
        >
            {
                heroImg.map((item,index)=>(
                    <Image
                    key={item.alt}
                    src={item.imgUrl}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className="object-contain"
                    // style={{  width: '700px', height: '700px' }}
                    />
                ))
            }
        </Carousel>
        <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        width={140}
        height={140}
        alt='arrow-right'
        className='max-xl:hidden absolute -left-[15%] bottom-0 z-0'
        />
    </div>
  )
}

export default HeroCarosule