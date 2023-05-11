'use client'
import { Blob } from '@/components/Blobs'
import { Prompt } from '@/components/Prompt'
import { useConversationsStore } from '@/stores/conversations'

export default function Home() {
  const code = useConversationsStore((state) => state.code)

  return (
    <main className=' px-10 py-24 relative min-h-screen w-screen'>
      <h1 className='mt-2 bg-gradient-to-br from-white to-slate-10 bg-clip-text text-transparent text-[35px] leading-[42px] sm:text-6xl tracking-[-0.64px] sm:leading-[68px] sm:tracking-[-0.896px] font-bold mb-12 animate-delay-200 animate-duration-1000 animate-fadeIn text-center'>
        <span className='inline-block max-w-[700px] align-top'>
          Genera tus{' '}
          <span className='bg-clip-text bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-sky-500 to-stone-500'>
            componentes
          </span>
          <br />
          con{' '}
          <span className='relative bg-clip-text bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-400 via-sky-500 to-stone-5000'>
            <Blob className='absolute right-0 bg-cyan-600 -top-[200%]' />
            Inteligencia Artificial
          </span>
        </span>
      </h1>
      <div className='z-20 min-h-screen'>
        <div className='felx items-center h-full w-full'>
          <div className='w-full'>
            <Prompt />
          </div>
          {code && (
            <section className='mb-20 animate-fadeIn'>
              <h3 className='pt-20 pb-10 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400'>
                Resultado
              </h3>
            </section>
          )}
        </div>
      </div>
    </main>
  )
}
