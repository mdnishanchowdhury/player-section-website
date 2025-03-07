import React from 'react';

const Select = ({ playerItem }) => {
    console.log(playerItem)
    const { name, image, battingType } = playerItem;
    return (
        <div>
            <div className='flex justify-between items-center gap-3 rounded-[16px] border border-[rgba(19,19,19,0.10)] p-6 '>
                
                <div className='flex items-center gap-5'>
                <img src={image} alt="" className='w-[80px] h-[80px] rounded-2xl object-cover' />
                    <div>
                    <h3 className='text-2xl font-semibold'>{name}</h3>
                    <h3 className='text-base font-normal text-[rgba(19, 19, 19, 0.60)]'>{battingType}</h3>
                    </div>
                </div>

               <div> 
                <button>delete</button>
               </div>

            </div>
        </div>
    );
};


export default Select;
