import React from 'react'

const RightCardContent = (props) => {
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
                <div>
                    <p className='text-shadow-2xs text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi hic soluta exercitationem laboriosam nam.</p>
                    <div className='flex justify-between'>
                        <button style={{backgroundColor:props.color}} className=' bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                        <button style={{backgroundColor:props.color}} className=' bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent