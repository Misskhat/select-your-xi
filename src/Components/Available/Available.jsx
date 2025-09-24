import React, {use} from "react";
import Player from "../Player/Player";

const Available = ({playersPromise, setAvailableBalance}) => {
    const playerData = use(playersPromise);
    // console.log(playerData);
    return (
        <div className="w-[1240px] mx-auto grid md:grid-cols-3 grid-cols-2 gap-6">
            {
                playerData.map(player => <Player key={player.id} setAvailableBalance={setAvailableBalance} player={player}></Player>)
            }
        </div>
    );
};

export default Available;
