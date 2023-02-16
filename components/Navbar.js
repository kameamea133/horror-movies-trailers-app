import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/horrorLogo.png'

const Navbar = ({account}) => {
  return (
    <div className='navbar'>
        <Link href="/"><Image  className="logo-image" src={logo} alt="Application Logo" width={150} height={150}/></Link>
        <div className='account-info'>
          <p>Welcome {account.username}</p>
          <img className='avatar' src={account.avatar.url} alt={account.username}/>
        </div>
    </div>
  )
}

export default Navbar