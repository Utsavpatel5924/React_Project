import React from 'react'
import img from './Asset/man1.avif'
import "./Card.css"


const Card = (props) => {
    return (
        <>
            <div id='card'>
                <div className='w-80 bg-blue-700 rounded-xl py-5 border-2 border-blue-950'>
                    <img src={props.img} className='rounded-full h-40 w-40 mx-auto mb-5 border-4 border-black' alt="."></img>
                        <div className='bg-sky-200 rounded-xl' >
                            <h5 className='text-3xl  '>{props.name}</h5>
                            <h5 className='text-2xl text-yellow-500 mt-5'>{props.cource}</h5>
                            <p className='mt-5 '>{props.disc}</p>
                            <button className='mt-5 h-10 w-40 bg-blue-700 rounded-xl  mb-5'>Go somewhere</button>
                        </div>
                </div>
            </div >
        </>
    )
}

export default Card;
