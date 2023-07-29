import React from 'react';

function SideBar() {
    return (
        <section className="w-[24vw] h-full bg-[#161a1d] text-white p-2 overflow-y-scroll">
            <div className="w-[100%] m-auto mt-4">
                <div className="flex justify-between items-center p-2 py-4 rounded">
                    <div className="flex items-center">
                        <img
                            className="w-20 h-20 object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1610319620417-dc9759bb361c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
                            alt="image"
                        />

                        <div className="pl-4">
                            <h1 className="font-bold text-lg">
                                Skyler Gray <i className="fa-solid fa-angle-down pl-2"></i>
                            </h1>
                            <span className="text-gray-400">member</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 flex justify-center items-center rounded-full text-white bg-gray-700">
                        <i className="fa-solid fa-bell"></i>
                    </div>
                </div>
            </div>

            <div className="py-2 text-gray-400">
                <div>
                    <span>Top</span>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl text-white font-bold">Artist</h1>
                        <a href="#!" className="font-bold">
                            See all
                        </a>
                    </div>
                </div>

                {/* Artists */}
                <Artist
                    artistName="BTS"
                    img="https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="On"
                    id="01"
                />

                <Artist
                    artistName="Skyler Grey"
                    img="https://images.unsplash.com/photo-1689516584144-b67d904acc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Bed of lies"
                    id="02"
                />

                <Artist
                    artistName="Jungkook"
                    img="https://images.unsplash.com/photo-1689426131363-412b430fe109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Seven"
                    id="03"
                />

                <Artist
                    artistName="Ottoboy"
                    img="https://images.unsplash.com/photo-1687253363362-d2c7add0919e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Sugarcrash"
                    id="04"
                />
            </div>

            <div className="relative my-2">
                <img
                    src="https://images.unsplash.com/photo-1689600242990-25189446fd24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    className="w-full h-96 object-cover rounded relative"
                    alt="image"
                />
                
                <div className="absolute w-[90%] h-80 bg-black bg-opacity-80 bottom-2 left-4 p-4 rounded">
                    <div className="flex items-center">
                        <img
                            className="w-20 h-20 object-cover rounded"
                            src="https://images.unsplash.com/photo-1688954053896-45a7048cdac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                            alt="image"
                        />

                        <div className="pl-4">
                            <h1 className="font-bold text-lg text-white">Seven</h1>
                            <a href="#!" className="text-gray-400">
                                Jungkook
                            </a>
                        </div>
                    </div>

                    <div className="space-y-2 mt-8">
                        <div className="relative">
                            <div className="bg-gray-700 bg-opacity-80 rounded-full overflow-hidden">
                                <div
                                    className="bg-white w-1/2 h-2"
                                    role="progressbar"
                                    aria-label="music progress"
                                    aria-valuenow={1426} // Replace with appropriate value
                                    aria-valuemin="0"
                                    aria-valuemax="4550"
                                ></div>
                            </div>
                        </div>
                        <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                            <div className="text-slate-500 dark:text-slate-100">1:50</div>
                            <div className="text-slate-500 dark:text-slate-400">3:01</div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center py-2 pb-6 text-2xl">
                        <div className="">
                            <i className="fa-solid fa-shuffle"></i>
                        </div>
                        <div className="flex items-center">
                            <span className="">
                                <i className="fa-solid fa-backward-step"></i>
                            </span>
                            <button className="w-20 h-20 p-2 mx-4 text-5xl bg-gray-700 rounded-full">
                                <i className="fa-solid fa-pause"></i>
                            </button>
                            <span className="">
                                <i className="fa-solid fa-forward-step"></i>
                            </span>
                        </div>
                        <div className="">
                            <i className="fa-solid fa-repeat"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Artist = (props) => {
    return (
        <div className="flex justify-between items-center p-2 py-2 rounded hover:bg-gray-800 bg-opacity-20">
            <div className="flex items-center">
                <img
                    className="w-16 h-16 object-cover rounded"
                    src={props.img}
                    alt="image"
                />

                <div className="pl-4">
                    <h1 className="font-bold text-lg text-white">{props.songName}</h1>
                    <a href="#!" className="text-gray-400">
                        {props.artistName}
                    </a>
                </div>
            </div>
            <div className="text-lg">
                <span>{props.id}</span>
            </div>
        </div>
    );
};

export default SideBar;

