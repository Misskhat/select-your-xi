import React, { useState } from 'react';
import user1 from "../../assets/user1.png";
import flagIcon from "../../assets/flagIcon.png";

const Player = ({player, setAvailableBalance}) => {
    const [isSelected, setIsSelected] = useState(false)
    // console.log(player);
    const {playerImg, playerCountry, playerName, playerType, price, rating, typeOfBall, typeOfBat} = player
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-6">
                <figure className=' overflow-hidden bg-blue-100 rounded-2xl'>
                    <img className='rounded h-[240px] object-cover' src={playerImg} alt={`${{playerName}} photo`} />
                </figure>
                <div className="pt-6">
                    <div className="flex gap-1.5">
                        <img src={user1} alt="" />
                        <h3 className="text-xl font-semibold">{playerName}</h3>
                    </div>
                    <div className="flex items-center justify-between pt-6 pb-6">
                        <div className="flex gap-1.5">
                            <img src={flagIcon} alt="" />
                            <span className="opacity-50">{playerCountry}</span>
                        </div>
                        <button className="btn">{playerType}</button>
                    </div>
                    <div className="border-b solid text-[#1313131a]"></div>
                    <p className="pt-4 pb-4 font-bold">Rating: {rating} <span></span></p>
                    <div className="flex justify-between items-center">
                        <p className="font-bold">{typeOfBat}</p>
                        <p className="opacity-50"> {typeOfBall} </p>
                    </div>

                    <div className="card-actions flex items-center justify-between pt-3">
                        <p className="font-bold">Price: $<span> {price} </span></p>
                        <button disabled={isSelected} onClick={()=>{
                            setIsSelected(true)
                            setAvailableBalance(500)
                        }} className="btn">{isSelected? "Selected": "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;