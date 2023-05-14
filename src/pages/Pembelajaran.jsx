import React, { useState } from 'react';

export default function Pembelajaran() {
  const [websites, setWebsites] = useState([
    {
      web: 'Investopedia',
      desc: 'Investopedia adalah platform pembelajaran keuangan yang menawarkan artikel, tutorial, dan video tentang berbagai topik keuangan, termasuk investasi, manajemen keuangan pribadi, pasar saham, dan lainnya.',
      link: 'https://www.investopedia.com',
    },
    {
      web: 'MoneySense',
      desc: 'MoneySense adalah situs web dari Otoritas Moneter Singapura yang menyediakan berbagai sumber daya dan artikel pembelajaran keuangan. Materi meliputi pengelolaan uang, perencanaan keuangan, investasi, dan aspek keuangan lainnya.',
      link: 'https://www.moneysense.gov.sg',
    },
    {
      web: 'Smart About Money',
      desc: 'Smart About Money adalah situs web yang menyediakan kursus dan sumber daya pembelajaran gratis tentang manajemen keuangan pribadi. Materi meliputi pengelolaan utang, perencanaan keuangan, investasi, pengelolaan risiko, dan topik keuangan lainnya.',
      link: 'https://www.smartaboutmoney.org',
    },
    {
      web: 'MyMoney.gov',
      desc: 'MyMoney.gov adalah situs web pemerintah Amerika Serikat yang menyediakan sumber daya dan alat pembelajaran keuangan. Anda dapat menemukan informasi tentang mengelola anggaran, membayar hutang, investasi, asuransi, dan topik keuangan lainnya.',
      link: 'https://www.mymoney.gov',
    },
    {
      web: 'MoneySmart',
      desc: 'MoneySmart adalah situs web dari Komisi Konsumen dan Persaingan Australia yang menyediakan informasi dan alat pembelajaran keuangan. Anda dapat menemukan artikel, kalkulator, dan panduan tentang topik keuangan, termasuk pengelolaan uang, investasi, asuransi, dan pensiun.',
      link: 'https://www.moneysmart.gov.au',
    },
  ]);

  const [quotes, _] = useState([
    {
      capt: 'Tabunglah dulu, belanjakan sisanya.',
      by: 'Warren Buffett',
    },
    {
      capt: 'Belajarlah untuk hidup di bawah penghasilan Anda.',
      by: 'Thomas J. Stanley',
    },
    {
      capt: 'Buat anggaran dan patuhi itu.',
      by: 'Suze Orman',
    },
    {
      capt: 'Investasikan dalam pengetahuan keuangan Anda sendiri, itu adalah investasi terbaik yang dapat Anda buat..',
      by: 'Benjamin Franklin',
    },
    {
      capt: 'Ketika uang bekerja untukmu, kamu tidak perlu bekerja untuk uang.',
      by: 'Confucius',
    },
    {
      capt: 'Hidup sederhana, berinvestasilah secara bijaksana, dan perhatikan pengeluaranmu.',
      by: 'John C. Bogle',
    },
    {
      capt: 'Jangan menghabiskan uang untuk hal-hal yang tidak memberimu kebahagiaan jangka panjang.',
      by: 'Suze Orman',
    },
    {
      capt: 'Kontrol pengeluaranmu sebelum pengeluaranmu mengendalikanmu.',
      by: 'Dave Ramsey',
    },
    {
      capt: 'Rencanakan pensiunmu sedini mungkin, masa depanmu layak untuk dipersiapkan.',
      by: 'Thomas J. Stanley',
    },
    {
      capt: 'Belajarlah dari kesalahan keuanganmu, dan bergerak maju dengan bijaksana..',
      by: 'Robert Kiyosaki',
    },
  ]);
  return (
    <section className=''>
      <section className='text-gray-100 '>
        <div className='container max-w-5xl px-4 py-12 mx-auto'>
          <div className='grid gap-4 mx-4 sm:grid-cols-12'>
            <div className='col-span-12 sm:col-span-3'>
              <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400'>
                <h3 className='text-3xl font-semibold'>
                  Tips & Trik Mengelola Keuangan
                </h3>
                <span className='text-sm font-bold tracking-wider text-gray-400 uppercase'>
                  websites
                </span>
              </div>
            </div>
            <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
              <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700'>
                {websites.map((website, _) => (
                  <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400'>
                    <a
                      href={website.link}
                      target='_blank'
                      className='text-xl font-semibold tracking-wide'
                    >
                      {website.web}
                    </a>
                    <p className='mt-3'>{website.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='container flex flex-col items-center mx-auto md:p-10 md:px-12'>
        <h1 className='text-4xl font-semibold leading-none text-center'>
          Quotes of the day
        </h1>
      </div>
      <div className='container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10'>
        {quotes.map((e) => {
          return (
            <div className='flex flex-col max-w-sm mx-4 my-6 border border-white shadow shadow-lg shadow-white rounded-xl'>
              <div className='px-4 py-12 rounded-t-lg sm:px-8 md:px-12 '>
                <p className='relative px-6 py-1 text-lg italic text-center '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    fill='currentColor'
                    className='w-8 h-8 '
                  >
                    <path d='M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z'></path>
                    <path d='M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z'></path>
                  </svg>
                  {e.capt}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    fill='currentColor'
                    className='absolute right-0 w-8 h-8 '
                  >
                    <path d='M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z'></path>
                    <path d='M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z'></path>
                  </svg>
                </p>
              </div>
              <div className='flex flex-col items-center justify-center p-8 rounded-b-lg '>
                <p className='text-xl font-semibold leading-tight text-sky-600'>
                  {e.by}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
