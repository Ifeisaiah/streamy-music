import Stream from "./stream"

function SuggestedPodcast() {
    return (
        <div className="w-full">
            <div className="flex justify-between w-full">
                <h1 className="font-bold text-3xl pb-2">Relax and Refresh</h1>
                <a href="#!" className="font-bold text-gray-400">See all</a>
            </div>
            <div className="suggested-stream w-[100%] grid gap-2">
                <Stream albumCover="https://i.pinimg.com/474x/d9/e6/65/d9e665c6054621523ce9889ecbfd81e2.jpg" 
                name="Trying not to care" custom="rounded"></Stream>
                <Stream albumCover="https://i.pinimg.com/474x/5d/89/2b/5d892bfa8887fae034174da1349dc79a.jpg" 
                name="I say what I want" newEpisode={true} custom="rounded"></Stream>
                 <Stream albumCover="https://i.pinimg.com/474x/30/0c/06/300c065a1660968f2ae03c99fba613fb.jpg" 
                name="Glow up energy" custom="rounded"></Stream>
                 <Stream albumCover="https://i.pinimg.com/474x/4f/84/0e/4f840e55babca906c4d6ae093d917cf7.jpg" 
                name="The work it out pod" newEpisode={true} custom="rounded"></Stream>
              {/*   <Stream albumCover="https://i.pinimg.com/474x/cf/68/66/cf6866ecd37fc3f2e7bf03b624192813.jpg" 
                name="Exclusive mindset" custom="rounded"></Stream>
                 <Stream albumCover="https://i.pinimg.com/474x/d7/2a/c8/d72ac869fc3ce7094d57a7143b506c9c.jpg" 
                name="Everything everywhere" newEpisode={true} custom="rounded"></Stream>
        */}
            </div>
        </div>
    )
}

export default SuggestedPodcast