export function Prompt() {
  return (
    <form>
      <div className='relative block'>
        <textarea
          placeholder='Crea un botón de color rojo con un borde de 2px y un borde redondeado de 5px.'
          rows={1}
          name='prompt'
          type='text'
          className='resize-none pr-10 opacity-40 pointer-events-none'
        />
        <div className='absolute top-0 flex items-center justify-center h-full right-4' />
      </div>
    </form>
  )
}
