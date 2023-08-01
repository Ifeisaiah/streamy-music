import { useState } from "react";

function Stream(props) {
    let [showprofile, setShowProfile] = useState(true);
    let [showPlay, setShowPlay] = useState(false);

    const showPlayBtn = () => {
        setShowPlay(true);
        setShowProfile(false);
    }

    const showProfileIcon = () => {
        setShowPlay(false);
        setShowProfile(true);
    }
    return (
        <div className="relative bg-gray-800 bg-opacity-80 p-4 shrink-0 rounded my-2 mx-2 active:scale-90 hover:bg-gray-700 transition ease-out duration-300" onMouseEnter={showPlayBtn} onMouseLeave={showProfileIcon}> 
            <img src={props.albumCover}
            alt="album image"
            className={`relative w-full h-40 object-cover ${props.custom}`} />
        
            {props.newEpisode && <span className="text-[10px] p-2 block bg-[#3f72ab] absolute top-6 right-6 rounded">New episode</span>}
        
            <div className="py-4 flex justify-between">
                <div>
                    <h1 className="font-bold text-lg overflow-scroll">{props.name}</h1>
                    <span className="text-gray-400 text-sm">Jul 32 . 36 min</span>
                </div>
                <div>
                   { showprofile && <img src={props.albumCover}
                    className={`w-14 h-12 rounded object-cover ${props.rounded? 'rounded-full': 'rounded'}`} />
                    } {
                        showPlay && <button className="w-14 h-14 text-3xl bg-[#3f72ab] rounded-full">
                                   <i className="fa-solid fa-play"></i>
                                    </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Stream;