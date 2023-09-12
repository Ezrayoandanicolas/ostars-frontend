import PhotoHuman from '../../../images/Ostars-1.png'
import { FaWhatsapp } from 'react-icons/fa';

const Owner = () => {
    return (
        <>
            <div className="relative">
                {/* <div className="mr-20 w-full h-screen bg-[#0b0836]"> */}
                <div className="mr-20 w-full h-screen">
                    <div class="container grid grid-cols-2 gap-2 ml-[-10%]">
                        <div>
                            <img className='absolute left-40 bottom-0 w-96' src={ PhotoHuman } alt="Owner Ostars" srcset="Owner Ostars" />
                        </div>
                        <div className='mt-52 text-left'>
                            <div className="title">
                                <h1 className='text-5xl font-bold'>
                                    Ezra Yoanda Nicolas
                                </h1>
                                <h3 className='font-bold ml-1 text-xl'>
                                    Founder Ostars
                                </h3>
                            </div>
                            <div className='description ml-1 mt-5'>
                                Kami perusahaan kecil menengah, Pertama di Medan yang memiliki jasa perancangan website support cms mulai dari 0 dengan template buatan mandiri yang lebih bersahabat dan menarik minat para pengusaha muda, sehingga mampu bersaing dengan E-Commerce tingkat menengah keatas. Sangat cocok digunakan untuk Start Up, Sales, Wirausaha, Waralaba, sampai dengan Perusahaan besar dengan periklanan online profesional. Yang sudah dipercaya oleh berbagai jenis usaha. <br /> <br />
                                Kami mencoba memberikan hasil yang terbaik untuk anda, dengan jaminan kualitas, harga jujur, profesional, ulet, teliti, dan memperhatikan hal-hal detail yang diinginkan oleh pelanggan, dan itu merupakan prinsip kami.
                            </div>
                            <div className='flex button-whatsapp mt-10'>
                                <button className="flex justify-center items-center bg-green-600 hover:bg-green-500 px-5 py-2 rounded-xl">
                                    <FaWhatsapp className='w-6 h-6 mr-2' /> Marketing
                                </button>
                                <button className="flex justify-center items-center bg-green-600 hover:bg-green-500 px-5 py-2 rounded-xl ml-10">
                                    <FaWhatsapp className='w-6 h-6 mr-2' /> Teknisi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }

export default Owner