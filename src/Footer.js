import React from 'react'

function Footer() {
  return (
    <div className='   w-screen h-28 bg-slate-900 shadow-2xl static bottom-0 sm:mt-20 mt-16'>
   <div className='text-gray-600 text-center font-Nunito italic text-sm py-4'> Copyright @ { new Date().getFullYear()} MNawazKhan , All Right reserved</div>
 <div className='text-gray-600 text-center font-Nunito italic text-sm ' >Contact me  <a  className="no-underline p-2 text-gray-200 font-bold"href="mailto:mohdnawaz6393@gmail.com">Mail</a></div>
    </div>
  )
}

export default Footer
