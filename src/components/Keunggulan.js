import { DevicePhoneMobileIcon, ServerIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const Keunggulan = () => {
    return (
        <section className="bg-gray-900 mt-20 rotate-1 scale-105">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 -rotate-1">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Fitur Website Ostars</h2>
                    <p className="mb-5 font-light sm:text-xl text-white">Berikut ini beberapa Fitur Website yang kami buat.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-800 rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <DevicePhoneMobileIcon className="w-24 m-auto text-white"></DevicePhoneMobileIcon>
                        <h3 className="mb-4 text-2xl text-white font-semibold">Desain Responsif</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Best option for personal use & for your next project.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-800 rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <ServerIcon className="w-24 m-auto text-white"></ServerIcon>
                        <h3 className="mb-4 text-2xl text-white font-semibold">Sistem Manajemen Konten</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Relevant for multiple users, extended & premium support.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-800 rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <PresentationChartBarIcon className="w-24 m-auto text-white"></PresentationChartBarIcon>
                        <h3 className="mb-4 text-2xl text-white font-semibold">Integrasi Social Media</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Best for large scale uses and extended redistribution rights.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Keunggulan;