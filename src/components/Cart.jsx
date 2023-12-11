import React from 'react'
import {FaRegFileAlt} from "react-icons/fa";
import {LuDownload} from "react-icons/lu";
import {IoClose} from "react-icons/io5";
import {motion} from "framer-motion";
function Cart({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.4} className=' relative w-60 h-72 bg-sky-200 rounded-[20px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.decs}</p> 
       <div className=' footer absolute bottom-0 w-full  left-0 '>
         <div className='flex justify-between items-center py-2 px-5 '>
            <h5>{data.filesize}</h5>
           
            <span className='w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center'>
                {data.close?<IoClose /> :<LuDownload  size=".8em" color='green'/>}
            
            </span>
             
         </div>
         {
            data.tag.isopen?(<div className='w-full py-3 bg-green-400 flex justify-center items-center'>
            <h3 className='text-md font-semibold'>Download Now</h3>
         </div>):null
         }
         
       </div>
        
      


    </motion.div>
  )
}

export default Cart