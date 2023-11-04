import Head from 'next/head'
import Image from 'next/image'
import heroImg from '../../public/assets/hero.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarefas</title>
      </Head>
      
      <main className='bg-dark-gray w-full min-h-[100vh] h-auto flex gap-10 justify-center items-center flex-col'>
        <div className='max-w-[300px] sm:max-w-[480px] object-contain w-auto h-auto'>
          <Image src={heroImg} alt='Logo Tarefas+' priority/>
        </div>
        <h1 className='text-center font-bold text-2xl text-white '>
          Sistema feito para você organizar 
          <br /> 
          seus estudos e tarefas
        </h1>
        <div className='flex items-center gap-8 flex-col sm:flex-row'>
          <section className='bg-purple-800 text-white font-bold w-48 h-10 rounded-2xl flex items-center justify-center hover:scale-105 transition-all cursor-default'>
            <span>+12 posts</span>
          </section>
          <section className='bg-purple-800 text-white font-bold w-48 h-10 rounded-2xl flex items-center justify-center hover:scale-105 transition-all cursor-default'>
            <span>+90 comentarios</span>
          </section>
        </div>
      </main>

    </div>
  )
}
