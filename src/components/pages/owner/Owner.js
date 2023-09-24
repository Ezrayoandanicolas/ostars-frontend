import React from 'react'
import PhotoHuman from '../../../images/Ostars-1.png'
import TemplateOne from '../../../images/owner-template-1.png'
import TemplateTwo from '../../../images/owner-template-2.png'
import { FaWhatsapp } from 'react-icons/fa';

const Owner = () => {
    return (
        <>
            <div className="relative bg-gray-900 rounde">
                {/* <div className="mr-20 w-full h-screen bg-[#0b0836]"> */}
                <div className="flex items-center w-full h-screen">
                    <div className="relative overflow-hidden container p-10 grid grid-cols-2 gap-2 bg-white m-auto justify-center rounded-xl">
                        <div className='m-auto'>
                            <img className='w-96' src={ PhotoHuman } alt="Owner Ostars" srcset="Owner Ostars" />
                            <img className='w-1/2 absolute bottom-[-1%] left-0' src={ TemplateOne } alt="Template One" srcset="Template One" />
                            <img className='w-1/2 absolute top-[-1%] right-0 -z-1' src={ TemplateTwo } alt="Template One" srcset="Template One" />
                        </div>
                        <div className='text-left mt-28'>
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
                                <button className="flex justify-center items-center bg-green-600 hover:bg-green-500 px-5 py-2 rounded-xl text-white">
                                    <FaWhatsapp className='w-6 h-6 mr-2' /> Marketing
                                </button>
                                <button className="flex justify-center items-center bg-green-600 hover:bg-green-500 px-5 py-2 rounded-xl text-white ml-5">
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