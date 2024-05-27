


import React from 'react'

const ButtonComponent = ({text,bgColor,textColor,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className={`transition-all duration-300 hover:bg-white hover:text-black   w-full ${bgColor} ${textColor} px-5 p-3 rounded-lg`}>
            {text}
        </button>
    </div>
  )
}

export default ButtonComponent