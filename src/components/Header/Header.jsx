import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../assets/logo.png'
import './Header.css'
import { BsCoin } from "react-icons/bs";
import bgImage from '../../assets/bg-shadow.png'
import bannerImage from '../../assets//banner-main.png'
import Banner from '../Banner/Banner';

const Header = ({ handleCoinCollect, coin }) => {
    return (
        <>
            <div className='flex justify-between items-center px-5 md:px-10 lg:px-[140px] pt-12'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <nav >
                    <ul className='flex gap-3 lg:gap-10 items-center'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                        <button className='text-xs lg:text-base font-normal rounded-[12px] border border-[rgba(19,19,19,0.10)] 
                         bg-white p-2 lg:p-3 flex items-center gap-1'>
                            {coin > 0 ? `${coin} Coin` : '0 coin'} <BsCoin />
                        </button>

                    </ul>
                </nav>
            </div>

            {/* Background Section */}
            <div
                className="bg-[#131313] lg:w-full  lg:max-w-[1320px] lg:mx-auto h-auto rounded-3xl text-white py-16 bg-cover mt-6 mx-5"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="flex flex-col items-center text-center gap-6 px-5 md:px-10">
                    <div className="w-full max-w-md">
                        <img
                            src={bannerImage}
                            alt="Cricket Banner"
                            className="w-[248px] h-[200px] mx-auto object-cover object-top"
                        />
                    </div>
                   <Banner handleCoinCollect={handleCoinCollect}></Banner>
                </div>
            </div>

            <div>

            </div>

        </>

    );
};

// Header.propTypes = {

// };

export default Header;