import React from "react";
import Card from "./Card";
import './CardList.css'
const CardList = ({ data }) => {
  return (
    <div className="box">
    <div className="container">
      <div className="row">
      {data.map((user, i) => {
        return (
              <div class="col-sm">
                <Card
                  key={i}
                  count={i}
                  songUrl={data[i].previewUrl}
                  imageUrl={data[i].artworkUrl100}
                  songName={data[i].collectionCensoredName}
                />
             </div>
        );
      })}
      </div>
      </div>
    </div>
  );
};

export default CardList;
