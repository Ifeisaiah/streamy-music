import Stream from "./stream"

function SuggestedMusic() {

    let custom = "rounded-full h-56";
    return (
        <div className="w-full my-4">
            <div className="flex justify-between w-full">
                <h1 className="font-bold text-3xl pb-2">Global sensation</h1>
                <a href="#!" className="font-bold text-gray-400">See all</a>
            </div>
            <div className="suggested-stream  w-[100%] grid gap-2 overflow-scroll">
                <Stream albumCover="https://i.pinimg.com/474x/a7/8e/1d/a78e1d483a1323f9d79c638486dea334.jpg" 
                name="Trying not to care" custom={custom} rounded={true}></Stream>
                <Stream albumCover="https://i.pinimg.com/474x/e3/2a/08/e32a084e8de8447ca6955428e34e3e6a.jpg" 
                name="I say what I want" custom={custom} rounded={true}></Stream>
                 <Stream albumCover="https://i.pinimg.com/474x/66/06/4c/66064c014b482ca61b74b951f8e9fe19.jpg" 
                name="Glow up energy" custom={custom} rounded={true}></Stream>
                 <Stream albumCover="https://i.pinimg.com/474x/0d/6e/b0/0d6eb0e8219d8349d4b3b6da06a68417.jpg" 
                name="The work it pod" custom={custom} rounded={true}></Stream>
             {/*    <Stream albumCover="https://i.pinimg.com/474x/cf/68/66/cf6866ecd37fc3f2e7bf03b624192813.jpg" 
                name="Exclusive mindset" custom={custom}></Stream>
                 <Stream albumCover="https://i.pinimg.com/474x/d7/2a/c8/d72ac869fc3ce7094d57a7143b506c9c.jpg" 
                name="Everything everywhere" newEpisode={true} custom={custom}></Stream>
             */}
               </div>
        </div>
    )
}

export default SuggestedMusic;