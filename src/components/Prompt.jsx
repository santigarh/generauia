'use client'

import { useEffect, useRef } from 'react'

export function Prompt() {
  const textAreaRef = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const prompt = formData.get('prompt')

    const response = await fetch(
      `/api/generate?prompt=${prompt}&language=javascript&framework=react`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log({ response })
  }

  useEffect(() => {
    textAreaRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative block'>
        <textarea
          ref={textAreaRef}
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
