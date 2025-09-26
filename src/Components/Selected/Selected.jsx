import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";


const Selected = ({selectedPlayers, removePlayer}) => {
    // console.log(selectedPlayers);
    return (
        <div>
           {
            selectedPlayers.map((player, index) => <SelectedPlayer key={index} removePlayer={removePlayer} player={player}></SelectedPlayer>)
           }
        </div>
    )
};

export default Selected;
