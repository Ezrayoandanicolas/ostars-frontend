import React, {useState} from "react";
import CheckIcon from "./icons/CheckIcon";
import CloseMark from "./icons/CloseMark";

const Product = () => {
    const [detailProduct, toggleDetail] = useState(false)
    const handleDetail = () => {
        toggleDetail(!detailProduct)
    }

    return (
        <section className="relative bg-gray-900 -rotate-1 scale-110 mt-5">
            <div className="py-8 px-4 mb-10 rotate-1 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Jenis Website Anda Pilih</h2>
                    <p className="mb-5 font-light text-white sm:text-xl">Silahkan pilih paket yang sesuai dengan kebutuhan anda.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Pemula</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Solusi Terbaik untuk pemula yang ingin Tes Pasar dengan Biaya yang terjangkau.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-3xl font-extrabold">Rp. 500.000</span>
                            <span className="text-gray-500 dark:text-gray-400">/Tahun</span>
                        </div>
                         {/* List */}
                        <ul className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>4 Menu/Page</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Free Domain <br/>(.online, .store, .web.id, .my.id, .asia, .xyz)</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Integrasi Sosial Media</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Website SSL</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Revisi 2x</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Maintenance 1 Bulan</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Support Teknis Selamanya</span>
                            </li>
                        </ul>
                        <button onClick={handleDetail} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">{ !detailProduct ? 'Lihat Detail' : 'Tampilkan Sedikit' }</button>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Pebisnis</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Solusi Terbaik untuk Pebisnis Pemula dan Promosi dengan biaya yang Kompetitif.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-3xl font-extrabold">Rp. 1.500.000</span>
                            <span className="text-gray-500 dark:text-gray-400">/Tahun</span>
                        </div>
                         {/* List */}
                        <ul className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>8 Menu/Page</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Free Domain <br/>(.com, .co.id, .web.id, .id)</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Integrasi Sosial Media</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Website SSL</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Revisi 2x</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Maintenance 1 Bulan</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Support Teknis Selamanya</span>
                            </li>
                        </ul>
                        <button onClick={handleDetail} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">{ !detailProduct ? 'Lihat Detail' : 'Tampilkan Sedikit' }</button>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Perusahaan</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Cocok untuk perusahaan kecil menengah dan keatas dengan biaya kompetitif.</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-3xl font-extrabold">Rp. 3.000.000</span>
                            <span className="text-gray-500 dark:text-gray-400">/Tahun</span>
                        </div>
                         {/* List */}
                        <ul className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>15 Menu/Page</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Free All Domain <br /> (.com, .co.id, .id)</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Integrasi Sosial Media</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Website SSL</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Revisi 4x</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Maintenance 3 Bulan</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                 {/* Icon */}
                                <CheckIcon />
                                <span>Support Teknis Selamanya</span>
                            </li>
                        </ul>
                        <button onClick={handleDetail} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">{ !detailProduct ? 'Lihat Detail' : 'Tampilkan Sedikit' }</button>
                    </div>
                </div>
                
                <div className={ !detailProduct ? 'opacity-0 h-0 transition-all ease-in-out duration-300' : 'relative overflow-x-auto shadow-md sm:rounded-lg mt-10 m-5 bg-blue-500 transition-all ease-in-out duration-500' }>
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-white uppercase bg-gray-600">
                            <tr>
                                <th scope="col-4" className="w-[20%] px-6 py-3">
                                    Fitur Website
                                </th>
                                <th scope="col-2" className="w-[20%] px-6 py-3 text-center">
                                    Pemula
                                </th>
                                <th scope="col-2" className="w-[15%] px-6 py-3 text-center">
                                    Pebisnis
                                </th>
                                <th scope="col-2" className="w-[15%] px-6 py-3 text-center">
                                    Perusahaan
                                </th>
                                <th scope="col-2" className="w-[15%] px-6 py-3 text-center">
                                    Custom Website
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Halaman/Page
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        4 Pages
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        8 Pages
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        15 Pages
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        15+ Pages
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Free Domain
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        .online, .store, .web.id, .my.id, .asia, .xyz
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        .com, .co.id, .web.id, .id
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        All Domain
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        All Domain
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Unlimited Bandwidth
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Unlimited Resources
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Integrasi Sosial Media
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Website SSL
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Maintenance Website
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        1 bln
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        2 bln
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        3 bln
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        4 bln
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Standar Kontak Form
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Whatsapp Integrasi
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Email Bisnis
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Free Banner dan Logo
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Statistik Kunjungan Website
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google Map Integrasi
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Backup Data
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        Setiap 2 Minggu
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        Setiap 1 Minggu
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        setiap 3 Hari
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        Setiap Hari
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Revisi Aplikasi
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        2x
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        2x
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        4x
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        10x
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Support Teknis
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Integrasi Livechat
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Facebook Ads
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google Ads
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CloseMark />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        <CheckIcon />
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-800 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Perpanjang
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        400 Rb/Tahun
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        1.2 Jt/Tahun
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        2.4 Jt/Tahun
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                        Custom
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-900 hover:bg-gray-700 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    
                                </th>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                        <a href="https://wa.me/6282136803873?text=Halo, saya tertarik dengan produk/jasa yang Anda tawarkan. Bisa berikan informasi lebih lanjut tentang Paket Pemula?"><button className="bg-blue-500 px-4 py-2 rounded-lg text-white">Pesan Sekarang</button></a>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center items-center">
                                    <a href="https://wa.me/6282136803873?text=Halo, saya tertarik dengan produk/jasa yang Anda tawarkan. Bisa berikan informasi lebih lanjut tentang Paket Bisnis?"><button className="bg-blue-500 px-4 py-2 rounded-lg text-white">Pesan Sekarang</button></a>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                    <a href="https://wa.me/6282136803873?text=Halo, saya tertarik dengan produk/jasa yang Anda tawarkan. Bisa berikan informasi lebih lanjut tentang Paket Perusahaan?"><button className="bg-blue-500 px-4 py-2 rounded-lg text-white">Pesan Sekarang</button></a>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center">
                                    <a href="https://wa.me/6282136803873?text=Halo, saya tertarik dengan produk/jasa yang Anda tawarkan. Bisa berikan informasi lebih lanjut tentang Paket Custom Website?"><button className="bg-blue-500 px-4 py-2 rounded-lg text-white">Pesan Sekarang</button></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}

export default Product;