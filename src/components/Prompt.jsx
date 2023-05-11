'use client'

import { useEffect, useRef } from 'react'
import { useConversationsStore } from '@/stores/conversations'

export function Prompt() {
  const textAreaRef = useRef()

  const generateComponent = useConversationsStore(
    (state) => state.generateComponent
  )

  const setPrompt = useConversationsStore((state) => state.setPrompt)
  const prompt = useConversationsStore((state) => state.prompt)

  const handleSubmit = async (event) => {
    event.preventDefault()
    generateComponent({ prompt })
  }

  useEffect(() => {
    textAreaRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative block'>
        <textarea
          ref={textAreaRef}
          onChange={(event) => {
            const { value } = event.target
            setPrompt(value)
          }}
          placeholder='Crea un botón de color rojo con un borde de 2px y un borde redondeado de 5px.'
          rows={1}
          name='prompt'
          type='text'
          className='placeholder-white/30 rounded-2xl block w-full text-md px-6 text-xl py-4 border border-zinc-600 bg-white/5 backdrop-blur-3xl sm:text-md shadow-lg text-white outline-none overflow-hidden transition ring-white/40 focus:ring-2e'
        />
        <button className='text-white'>Enviar</button>
      </div>
    </form>
  )
}
