
// import PropTypes from 'prop-types';
const Main = ({ handleShowPlayers, handleShowSelect,count }) => {
    return (
        <>
            <div >
                <div className='flex justify-between items-center my-5 px-5 md:px-10 lg:px-[140px]'>
                    <div>
                        <h3>Available Players</h3>
                    </div>
                    <div>
                        <button onClick={handleShowPlayers} className="px-5 py-[14px] border border-[rgba(19,19,19,0.10)
                         hover:bg-[#E7FE29]  hover:p-2  transition-all duration-300"
                        >Available</button>
                        <button onClick={handleShowSelect} className="px-5 py-[14px] border border-[rgba(19,19,19,0.10)] 
                    
                    hover:bg-[#E7FE29]  hover:p-3  transition-all duration-300"
                        >Selected ({count})</button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Main.propTypes = {

// };

export default Main;