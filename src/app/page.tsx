
import Image from 'next/image';

export default function Home() {
  return (
    <main className='min-h-screen bg-[#0a0a0a] text-white p-4'>
      <section className='text-center py-10'>
        <Image
          src='/penguin-dev.png'
          alt='Developer Penguin'
          width={128}
          height={128}
          className='mx-auto rounded-full mb-4'
        />
        <h1 className='text-3xl font-bold'>Привет, я TON-разработчик</h1>
        <p className='text-sm mt-2 text-gray-400'>
          Создаю сайты на TON-доменах, Telegram-визитки и мем-проекты
        </p>
        <a
          href='https://t.me/yourusername'
          className='inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'
          target='_blank'
        >
          Связаться со мной
        </a>
      </section>

      <section className='py-6'>
        <h2 className='text-xl font-semibold mb-4'>Примеры работ</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <a href='https://site1.ton' target='_blank' className='col-span-2'>
            <div className='bg-gray-800 h-48 rounded-lg flex items-center justify-center'>
              <span>Сайт 1 (Большой)</span>
            </div>
          </a>
          {[2, 3, 4, 5].map((n) => (
            <a key={n} href={'https://site' + n + '.ton'} target='_blank'>
              <div className='bg-gray-800 h-24 rounded-lg flex items-center justify-center'>
                <span>Сайт {n}</span>
              </div>
            </a>
          ))}
        </div>
        <a
          href='https://t.me/yourprojects'
          target='_blank'
          className='block text-center mt-4'
        >
          <span className='inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'>
            Больше сайтов
          </span>
        </a>
      </section>

      <section className='py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <a href='https://t.me/reviews_channel' target='_blank'>
            <div className='bg-gray-900 p-4 rounded-lg text-center'>Отзывы</div>
          </a>
          <a href='https://t.me/pricing_channel' target='_blank'>
            <div className='bg-gray-900 p-4 rounded-lg text-center'>Цены</div>
          </a>
          <a href='https://t.me/info_channel' target='_blank'>
            <div className='bg-gray-900 p-4 rounded-lg text-center'>Информация</div>
          </a>
        </div>
      </section>

      <section className='text-center py-6'>
        <a
          href='https://t.me/yourusername'
          className='inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition'
          target='_blank'
        >
          Связаться со мной
        </a>
      </section>
    </main>
  );
}
