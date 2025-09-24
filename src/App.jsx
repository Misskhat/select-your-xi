import {Suspense, useState} from "react";
import "./App.css";
import Available from "./Components/Available/Available";
import Navbar from "./Components/Navbar/Navbar";
import Selected from "./Components/Selected/Selected";

const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
};

function App() {
    const [toggle, setToggle] = useState(true);
    const [availableBalance, setAvailableBalance] = useState(60000000);
    const playersPromise = fetchPlayers();

    return (
        <>
            <Navbar availableBalance={availableBalance}></Navbar>
            <div className="max-w-[1240px] mx-auto flex items-center justify-between my-6">
                <h1 className="text-2xl font-bold">{toggle ? "Available Players" : "Selected Players"}</h1>
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
                        Selected <span>(0)</span>
                    </button>
                </div>
            </div>

            {toggle ? (
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                    <Available playersPromise={playersPromise} setAvailableBalance={setAvailableBalance}></Available>
                </Suspense>
            ) : (
                <Selected></Selected>
            )}
        </>
    );
}

export default App;
