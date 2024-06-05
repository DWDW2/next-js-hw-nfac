import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
        <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
            <h1 className="text-lg font-semibold">Nfac - blog</h1>
            <ul className="flex gap-[40px] text-m">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/Posts/main'>Posts</Link></li>
                <li><Link href='/Blogs'>blogs</Link></li>
                <li><Link href='/About'>About</Link></li>
            </ul>
        </div>
  )
}

export default Navbar