import { BoltIcon, HandThumbUpIcon, CodeBracketIcon, ChatBubbleLeftRightIcon, GiftIcon, CpuChipIcon } from '@heroicons/react/24/outline'

const service = () => {
    return (
        <section className="bg-white mt-20">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Alasan, Kenapa Memilih Jasa Kami?</h2>
                    <p className="mb-5 font-light sm:text-xl text-gray-800">Berikut ini alasan kenapa harus memilih jasa kami.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <BoltIcon className="w-24 m-auto text-yellow-300"></BoltIcon>
                        <h3 className="mb-4 text-2xl font-semibold">Pengerjaan Cepat</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Best option for personal use & for your next project.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <HandThumbUpIcon className="w-24 m-auto text-blue-300"></HandThumbUpIcon>
                        <h3 className="mb-4 text-2xl font-semibold">Terima Jadi</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Relevant for multiple users, extended & premium support.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <CodeBracketIcon className="w-24 m-auto text-indigo-300"></CodeBracketIcon>
                        <h3 className="mb-4 text-2xl font-semibold">Teknisi Berpengalaman</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Best for large scale uses and extended redistribution rights.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>

                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <ChatBubbleLeftRightIcon className="w-24 m-auto text-blue-300"></ChatBubbleLeftRightIcon>
                        <h3 className="mb-4 text-2xl font-semibold">Customer Support</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Best option for personal use & for your next project.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <GiftIcon className="w-24 m-auto text-red-300"></GiftIcon>
                        <h3 className="mb-4 text-2xl font-semibold">Banyak Bonus</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Relevant for multiple users, extended & premium support.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                     {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg xl:p-8">
                        <CpuChipIcon className="w-24 m-auto text-teal-300"></CpuChipIcon>
                        <h3 className="mb-4 text-2xl font-semibold">Control</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">Best for large scale uses and extended redistribution rights.</p>
                        <a href="/" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default service;