
// import PropTypes from 'prop-types';
import { IoFlag } from "react-icons/io5";

const Player = ({ player,handleSelect,}) => {
    // console.log(player);
    const { name, image, country, battingType, bowlingType, biddingPrice } = player;


    return (
        <div >

            <div className='rounded-[16px] border border-[rgba(19,19,19,0.10)] p-6'>
                <div className='py-3'>
                    <img src={image} alt="" className='w-[376px] h-[240px] rounded-2xl' />
                </div>

                <div className='flex gap-4 pb-3'>
                    <img src={image} alt="" className='w-[28px] h-[28px] rounded-full object-cover' />
                    <h3 className='text-xl font-bold'>{name}</h3>
                </div>

                <div className=''>
                    <h3 className=' flex text-[#131313] text-base font-normal gap-2 items-center'><span><IoFlag /></span> {country}</h3>
                </div>

                <div className='w-[376px] py-3'>
                    <h3 className='text-base font-bold py-3'>Rating</h3>
                    <div>
                        <div className='flex justify-between pb-2'>
                            <h3 className='text-base font-semibold'>{battingType}</h3>
                            <h3 className='text-base font-semibold'>{bowlingType}</h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-base font-semibold'>Price : {biddingPrice}$</h3>
                            <button onClick={()=>handleSelect(player)} className='text-sm font-normal border border-[rgba(19,19,19,0.10) p-4 rounded-xl  
                            hover:bg-[#E7FE29]  hover:p-3  transition-all duration-300
                            '>Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Player.propTypes = {
//     Player: PropTypes.player
// };

export default Player;