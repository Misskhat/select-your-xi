import React, {use} from "react";
import Player from "../Player/Player";

const Available = ({playersPromise, setAvailableBalance, availableBalance, selectedPlayers , setSelectedPlayers}) => {
    const playerData = use(playersPromise);
    // console.log(playerData);
    return (
        <div className="w-[1240px] mx-auto grid md:grid-cols-3 grid-cols-2 gap-6">
            {
                playerData.map(player => <Player key={player.id} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></Player>)
            }
        </div>
    );
};

export default Available;
