import {Suspense, useState} from "react";
import "./App.css";
import Available from "./Components/Available/Available";
import Navbar from "./Components/Navbar/Navbar";
import Selected from "./Components/Selected/Selected";
 import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
};
const playersPromise = fetchPlayers();

function App() {
    const [toggle, setToggle] = useState(true);
    const [availableBalance, setAvailableBalance] = useState(6000000000);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    // console.log(selectedPlayers);    
    const removePlayer = (player) =>{
        const filterData = selectedPlayers.filter(ply => ply.playerName !== player.playerName)
        setSelectedPlayers(filterData)
        setAvailableBalance(availableBalance + player.price)
    }

    return (
        <>
            <Navbar availableBalance={availableBalance}></Navbar>
            <div className="max-w-[1240px] mx-auto flex items-center justify-between my-6">
                <h1 className="text-2xl font-bold">{toggle ? "Available Players" : `Selected Players (${selectedPlayers.length} / 6)`}</h1>
                <div>
                    <button
                        onClick={() => setToggle(true)}
                        className={`btn py-3 px-6 rounded-l-2xl border-r-0 ${toggle && "bg-amber-400"}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setToggle(false)}
                        className={`btn py-3 px-6 rounded-r-2xl border-l-0 ${toggle || "bg-amber-400"}`}
                    >
                        Selected <span>({selectedPlayers.length})</span>
                    </button>
                </div>
            </div>

            {toggle ? (
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                    <Available selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} availableBalance={availableBalance} playersPromise={playersPromise} setAvailableBalance={setAvailableBalance}></Available>
                </Suspense>
            ) : (
                <Selected removePlayer={removePlayer} selectedPlayers={selectedPlayers}></Selected>
            )}
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
