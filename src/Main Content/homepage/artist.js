const Artist = (props) => {
    return (
        <div className="flex justify-between items-center py-[5px] rounded hover:bg-gray-700 transition ease-out duration-300 hover:bg-opacity-50">
            <div className="flex items-center">
                <img
                    className="w-12 h-12 object-cover rounded"
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

export default Artist;