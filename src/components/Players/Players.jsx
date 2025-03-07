import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({ showPlayers,handleSelect,}) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("players.json")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10">
            {showPlayers && players.map((player) =>  <Player key={player.id} player={player}
            handleSelect ={handleSelect} />
            // handleAddNumber ={handleAddNumber}
            )}
        </div>
    );
};

export default Players;