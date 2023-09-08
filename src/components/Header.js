import Background from '../images/background.jpeg'
import Typed from 'react-typed'

const Header = () => {
  const BackgroundStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${Background})`
  }

  return (
    <section className='realtive w-full h-screen bg-blue-300' style={BackgroundStyle}>
      <div className="flex flex-wrap m-auto text-white">
            <div className="flex items-center justify-center h-screen w-screen m-auto mb-[-22%] mt-[-5%]">
              <h1 className="text-center text-2xl lg:text-4xl xl:text-6xl">
                Buat website dengan
                <Typed
                  className='text-yellow-500 ml-4'
                  strings={['Harga Murah', 'Fitur Lengkap', 'Desain Responsif', 'Dukungan CMS', 'Tampilan Terkini']}
                  typeSpeed={60}
                  backSpeed={80}
                  backDelay={3000}
                  loop
                />
              </h1>
            </div>
            <div className="w-full m-auto mt-2">
                  <h1 className="text-center text-2xl lg:text-4xl xl:text-3xl">No 1 Pendukung Start Up/Pemula & Pebisnis</h1>                  
            </div>
            <div className="flex justify-center w-full m-auto mt-20">
                  <button className="bg-yellow-500 px-5 py-2 rounded-2xl text-xl">Pelajari Selengkapnya</button>                 
            </div>
        </div>
    </section>
  )
}

export default Header