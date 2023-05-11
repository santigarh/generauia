import { Blob } from '@/components/Blobs'
import { Prompt } from '@/components/Prompt'

export default function Home() {
  return (
    <main className='relative   min-h-screen w-screen'>
      <h1 className='mt-2 bg-gradient-to-br from-white to-slate-10 bg-clip-text text-transparent text-[35px] leading-[42px] sm:text-6xl tracking-[-0.64px] sm:leading-[68px] sm:tracking-[-0.896px] font-bold mb-12 animate-delay-200 animate-duration-1000 animate-fadeIn text-center'>
        <span className='inline-block max-w-[700px] align-top'>
          Genera tus{' '}
          <span className='bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800'>
            componentes
          </span>
          <br />
          con{' '}
          <span className='relative bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800'>
            <Blob className='absolute right-0 bg-purple-500 -top-[200%]' />
            Inteligencia Artificial
          </span>
        </span>
      </h1>
      <div className='z-20 min-h-screen'>
        <h1 className='bg-[conic-gradient(var(--tw-gradient-stops))] from-pink-700 via-yellow-400 to-pink-900 text-6xl font-bold text-transparent bg-clip-text'>
          Genera componentes con IA
        </h1>
        <div className='felx items-center h-full w-full'>
          <div className='w-full'>
            <Prompt />
          </div>
        </div>
      </div>
    </main>
  )
}
