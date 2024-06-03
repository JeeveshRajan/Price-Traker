import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    const navIcons=[
        {
            src:"/assets/icons/search.svg", alt:"search"
        },
        {
            src:"/assets/icons/black-heart.svg", alt:"heart"
        },
        {
            src:"/assets/icons/user.svg", alt:"user"
        },
    ]
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex items-center gap-1'>
         <Image src="/assets/icons/logo.svg"
         width={27}
         height={27}
         alt='logo'
         />
         <p className='nav-logo'>
            Price <span className='text-red-500'>Tracker</span>
         </p>
            </Link>

            <div className='flex gap-1 items-center'>
                {
                    navIcons.map((icon, index)=>(
                         <Image
                         key={index}
                         src={icon.src}
                         width={28}
                         height={28}
                         alt={icon.alt}
                         />
                    ))
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar