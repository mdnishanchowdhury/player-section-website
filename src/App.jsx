
import { useState } from 'react'
import Main from '../../player-section/src/components/Main/Main'
import Players from '../../player-section/src/components/Players/players'
import Select from '../../player-section/src/components/Select/Select'
import './App.css'
import Header from './components/Header/Header'


function App() {
  const [showPlayers, setShowPlayers] = useState(true);
  const [playerItem, setPlayerItem] = useState([]);
  const [count, setCount] = useState(0);
  const [coin, setCoin] = useState(0);

  const toggleView = (showPlayers) => {
    setShowPlayers(showPlayers);
  };

  const deductCoins = (biddingPrice) => {
    setCoin((prevCoin) => Math.max(prevCoin - biddingPrice, 0));
  };

  const handleCoinCollect = (totalCoin) => {
    setCoin((prevCoin) => prevCoin + totalCoin); 
  };

  const handleSelect = (player) => {
    if (playerItem.some((p) => p.playerId === player.playerId)) {
      alert(`⚠️ Player ${player.name} is already selected!`);
      return;
    }

    if (coin < player.biddingPrice) {
      alert(`❌ Not enough balance to select ${player.name}!`);
      return;
    }

    alert(`✅ Player ${player.name} selected successfully!`);
    deductCoins(player.biddingPrice);
    setCount((prevCount) => prevCount + 1);
    setPlayerItem((prevPlayers) => [...prevPlayers, player]);
  };

  return (
    <div>
      <Header handleCoinCollect={handleCoinCollect} coin={coin} />
      <Main handleShowPlayers={() => toggleView(true)} handleShowSelect={() => toggleView(false)} count={count} />

      <Players showPlayers={showPlayers} handleSelect={handleSelect} />

      {!showPlayers && (
        <div className="my-5 px-5 md:px-10 lg:px-[140px]">
          {playerItem.map((player) => (
            <Select key={player.playerId} playerItem={player} />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
