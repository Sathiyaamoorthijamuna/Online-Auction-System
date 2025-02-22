import React, { useState } from "react";
import "./AuctionDetails.css";

const AuctionDetails = ({ auctions, placeBid }) => {
  const [bidAmount, setBidAmount] = useState("");

  return (
    <div className="auction-details-container">
      <h2>Available Auctions</h2>
      <div className="auction-cards">
        {auctions.map((auction) => (
          <div key={auction.id} className="auction-card">
            <img src={auction.image} alt={auction.itemName} />
            <h3>{auction.itemName}</h3>
            <p>{auction.description}</p>
            <p>Highest Bid: ₹{auction.highestBid}</p>
            <input
              type="number"
              placeholder="Enter Bid (₹)"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
            <button onClick={() => placeBid(auction.id, bidAmount)}>Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionDetails;
