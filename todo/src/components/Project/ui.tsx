import React, { FC } from 'react'

interface Values {
  active: string,
}

const UI: FC<Values> = (props): JSX.Element => {
  return (
    <div className='grid place-content-center'>
        <div className='grid grid-cols-2 gap-6 pt-20 pb-10'>
            <div className="h-[400px] w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in">{props.active}</div>
            <div className="h-[400px] w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in">{props.active}</div>
            <div className="h-[400px] w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in">{props.active}</div>
            <div className="h-[400px] w-[550px] rounded-2xl bg-white transition-all duration-300 ease-in">{props.active}</div>
        </div>
    </div>
  )
}

export default UI
