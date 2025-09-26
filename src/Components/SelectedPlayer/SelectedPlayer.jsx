import React from "react";
import removeImg from "../../assets/removeImg.png";

const SelectedPlayer = ({player, removePlayer}) => {
    const {playerName, playerImg, typeOfBat} = player
    return (
        <div className="max-w-[1240px] mx-auto my-2">
            <div className="flex items-center justify-between border-2 p-3 rounded-2xl border-gray-400">
                <div className="flex items-center gap-2.5">
                    <img
                        className="h-[80px] rounded-2xl"
                        src={playerImg}
                        alt=""
                    />
                    <div>
                        <h3 className="font-bold text-2xl">{playerName}</h3>
                        <p className="">{typeOfBat}</p>
                    </div>
                </div>
                <div onClick={()=> removePlayer(player)}>
                    <img src={removeImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;
