import React from 'react';

const Card = ({count,songUrl, imageUrl, songName}) => {
  
    return (
      <>
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' style={{height:"350px",width:"400px" }}>
             <h4 className='b'>{count + 1}</h4>
            <h4 className='fonty pa1' style={{fontSize:"18px" , height:"2em"}}>{songName}</h4>
              <img className='pa3' src={imageUrl} alt='singer name'/>
            <audio controls>
                <source 
                src={songUrl}
                type="audio/mp3"/>
            </audio>
            <br/>
        </div>    
      </>
      
    );
  }
  
  export default Card;