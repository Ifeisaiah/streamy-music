import Stream from "../stream"

function SuggestedPodcast() {
    return (
        <div className="w-full">
            <div className="flex justify-between w-full">
                <h1 className="font-bold text-3xl pb-2">Relax and Refresh</h1>
                <a href="#!" className="font-bold text-gray-400">See all</a>
            </div>
            <div className="suggested-stream w-[100%] grid gap-2">
                <Stream albumCover="https://images.unsplash.com/photo-1611338687484-013f1b2544e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcmUlMjBmcmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" 
                name="Trying not to care" custom="rounded"></Stream>
                <Stream albumCover="https://images.unsplash.com/photo-1464446066817-4116494586bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyZSUyMGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" 
                name="I say what I want" newEpisode={true} custom="rounded"></Stream>
                 <Stream albumCover="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" 
                name="Glow up energy" custom="rounded"></Stream>
                 <Stream albumCover="https://images.unsplash.com/photo-1583969430754-a4ca5030bb21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29yayUyMG91dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" 
                name="Work it out pod" newEpisode={true} custom="rounded"></Stream>
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