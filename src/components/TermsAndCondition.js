import React from 'react'
const TermAndCondition = () => {
    return (
        <section className="mt-20">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Syarat & Ketentuan</h2>
                    <p className="mb-5 font-light sm:text-xl text-gray-800">Berikut ini adalah syarat & ketentuan yang dibuat demi kebaikan bersama.</p>
                </div>
                <div className="container flex m-auto w-full">
                     <ul className="leading-loose list-disc list-outside underline decoration-dashed underline-offset-8 decoration-gray-500/30">
                        <li>Kami akan memulai mengerjakan Website ketika Customer sudah melakukan pembayaran uang muka (DP) sebesar 50%. Sisahnya dibayarkan setelah website selesai dikerjakan.</li>
                        <li>Website akan dibuat sesuai dengan fitur template yang disajikan. Jika ada tambahan fitur, maka akan dikenakan biaya tambahan.</li>
                        <li>Materi website tidak boleh mengandung unsur pornografi, perjudian, money game atau unsur yang melanggar hukum lainnya.</li>
                        <li>Logo yang sudah termasuk dalam harga pembuatan, adalah logo standar.</li>
                        <li>Selesai dalam 7 Hari atau bisa lebih cepat sesuai dengan antrian.</li>
                        <li>Harga sudah termasuk domain dan hosting untuk 1 tahun.</li>
                        <li>Jika anda sudah mempunyai domain dan hosting, maka anda cukup mengurangi harga pembuatan website sebesar Rp. 150.000.</li>
                        <li>Layanan tidak mencakup pembuatan script yang bersifat pemrograman.</li>
                        <li>Backup yang pihak hosting lakukan semata-mata untuk keperluan internal server dan kami dibebaskan atas tuntutan hukum dan ganti rugi atas kehilangan atau kerugian yang disebabkan atas kelalaian klien dalam menyimpan data secara berkala.</li>
                        <li>Syarat dan ketentuan ini dibuat demi kebaikan bersama. Dengan memesan jasa kami, berarti anda setuju pada syarat dan ketentuan di atas.
</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TermAndCondition;