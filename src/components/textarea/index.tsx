import React, { HTMLProps } from 'react'

const TextArea = ({...rest} : HTMLProps<HTMLTextAreaElement>) => {
  return (
    <textarea className='w-full resize-none h-40 outline-none rounded-xl p-2' {...rest}></textarea>
  )
}

export default TextArea