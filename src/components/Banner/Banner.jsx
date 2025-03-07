import React from 'react';

const Banner = ({ handleCoinCollect }) => {
    return (
        <div>
            <div>
                <h3 className="text-3xl md:text-4xl font-bold">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h3>
                <p className="text-lg text-gray-300 mt-2">
                    Beyond Boundaries, Beyond Limits
                </p>
                <button onClick={() => handleCoinCollect(100000)} className="mt-4 px-6 py-3 bg-[#E7FE29]  text-black font-semibold rounded-lg 
                        hover:bg-[#6deea9]  hover:p-2  transition-all duration-300">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};
export default Banner;