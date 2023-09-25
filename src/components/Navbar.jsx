import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex sm:justify-center'> {[
            ['Home','/home'],
            ['Geschichte', '/geschichte'],
            ['BlauGelb','/blau-gelb'],
            ['Team','/team'],
        ].map(([title, url]) =>(
            <a href='url' className='px-3 py-2 hover:bg-gray-700 rounded-lg'>{title}</a>
        ))}
        

        </nav>
    </div>
    
  )
}
