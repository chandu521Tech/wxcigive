import './App.css';

import React, { useState } from 'react';

import cardsData from "./cardsData.json";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // cardsData?.cards[0
  const handleCardClick = (cardIndex) => {
    console.log(cardIndex, cardsData?.cards[cardIndex]);
    setShowDialog(true);
    setSelectedCard(cardsData?.cards[cardIndex]);
    document.body.style.overflow = 'hidden';
  }
  const closeDialogClick = () => {
    setShowDialog(false);
    document.body.style.overflow = 'unset';
  }
  return (
    <>
    <div className="App">
      <header className="appHeader">
      </header>
      <main className="mainContainer">
        <div className="pageHeader">
          <div role="presentation" className="wxciAuctionLogo"></div>
          <p>Bid to make it big! All auction bids to be donated on the Give Benevity Portal.</p>
        </div>
        <div className="cardsContainer">
          {cardsData?.cards.length > 0 && cardsData?.cards.map((card, index) => {
            return (<div className="card" onClick={(e) => handleCardClick(index)} key={card?.id} style={{backgroundImage: `url(${card?.thumbnail})`}}></div>);
          })}
        </div>
      </main>
    </div>
    {showDialog && (
            <div className="popupContainer">
            <div className="cardDetailsDialog">
              <div className="cardImage" style={{backgroundImage: `url(${selectedCard?.thumbnail})`}}></div>
              <div className="cardDetails">
                <div className="auctionItem">Auction Item</div>
                <h1 className="cardHeader">
                  {selectedCard?.name}
                </h1>
                <div className="artBy">by&nbsp;{selectedCard?.author}</div>
                <div className="description">{selectedCard?.description}</div>
                <div className="giveSmallLogo"></div>
              </div>
              <div className="closeIcon" onClick={(e) => closeDialogClick()}></div>
            </div>
          </div>
          )}
    </>
  );
}

export default App;
