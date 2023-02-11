import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/horrorLogo.png'

const Navbar = () => {
  return (
    <div>
        <Link href="/"><Image  className="logo-image" src={logo} alt="Application Logo" width={150} height={150}/></Link>
    </div>
  )
}

export default Navbar