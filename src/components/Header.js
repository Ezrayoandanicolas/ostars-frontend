import React from 'react'
import Background from '../images/background.jpeg'
import Typed from 'react-typed'

const Header = () => {
  const BackgroundStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${Background})`
  }

  return (
    <section className='realtive w-full h-screen bg-blue-300 -z-10' style={BackgroundStyle}>
      <div className="flex flex-wrap m-auto text-white">
        <div
          className="flex flex-col space-y-3 items-center justify-center h-screen w-screen m-auto​
            ">
            <h1
            className="text-center text-lg
              max-sm:text-4xl
              md:text-4xl
              lg:text-4xl
              xl:text-5xl
              2xl:text-6xl
              ">
              <div className='max-sm:flex max-sm:flex-col max-sm:space-y-2'>
                <span>Buat website dengan</span>
                  <Typed
                    className='text-yellow-500 ml-2'
                    strings={['Harga Murah', 'Fitur Lengkap', 'Desain Responsif', 'Dukungan CMS', 'Tampilan Terkini']}
                    typeSpeed={60}
                    backSpeed={80}
                    backDelay={3000}
                    loop
                  />
                </div>
              </h1>
            <div>
              <h1 className="text-center text-lg 2xl:text-3xl">No 1 Pendukung Start Up/Pemula & Pebisnis</h1>
            </div>                
            <div className="flex justify-center w-full m-auto">
                  <button className="mt-20 bg-yellow-700 px-5 py-2 rounded-2xl text-xl font-bold">Pelajari Selengkapnya</button>              
            </div>
            </div>
      </div>
    </section>
  )
}

export default Header