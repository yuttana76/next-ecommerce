"use client"

import Image from 'next/image'
import React, { useState } from 'react'

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/29522480/pexels-photo-29522480/free-photo-of-iconic-red-british-telephone-box-in-urban-scene.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/29070008/pexels-photo-29070008/free-photo-of-abundant-harvest-of-fresh-apples.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/8580351/pexels-photo-8580351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/20483373/pexels-photo-20483373/free-photo-of-obsolete-telephone-booth.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
// ];

const ProductImages = ({items}:{items:any}) => {

    const [index,setIndex] = useState(0)

  return (
    <div>
        <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
        </div>
        <div className='flex justify-between gap-4 mt-8'>
            {items.map((item:any,i:number)=>(

            <div 
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={i}
            onClick={()=> setIndex(i)}
            >
                <Image
                src={item.image?.url}
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-md"
                />
            </div>
            ))}
        
        </div>
    </div>
  )
}

export default ProductImages