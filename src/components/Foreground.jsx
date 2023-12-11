import React, { useRef } from 'react'
import Cart from './Cart'

function Foreground() {
    const ref=useRef(null)
    const data =[
        {
            decs:"This is our todo cart write your task",
            filesize:".2mb",
            close:false,
            tag:{
                isopen:true,tagTitel:"Download Now",tagcolor:"green"
            },
        },
        {
            decs:"I am going to do 5hr of DSA",
            filesize:".1mb",
            close:false,
            tag:{
                isopen:true,tagTitel:"Download Now",tagcolor:"green"
            },
        },
        {
            decs:"3hr of dev with react",
            filesize:".2mb",
            close:false,
            tag:{
                isopen:true,tagTitel:"Download Now",tagcolor:"green"
            },
        },
        {
            decs:"Rest i will read about System design and core fundamentals",
            filesize:".2mb",
            close:false,
            tag:{
                isopen:true,tagTitel:"Download Now",tagcolor:"green"
            },
        }
    ];
  return (
    <div ref={ref} className=' fixed z-3 top-0 left-0 w-full h-full flex gap-5 flex-wrap  '>
       {
        data.map((item,index)=>(
          <Cart data={item} reference={ref} />  
        ))
       }
    </div>
  )
}

export default Foreground