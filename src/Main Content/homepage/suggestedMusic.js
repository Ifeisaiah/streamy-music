import Stream from "../stream"

function SuggestedMusic() {

    let custom = "rounded-full";
    return (
        <div className="w-full my-4">
            <div className="flex justify-between w-full">
                <h1 className="font-bold text-3xl pb-2">Global sensation</h1>
                <a href="#!" className="font-bold text-gray-400">See all</a>
            </div>
            <div className="suggested-stream  w-[100%] grid gap-2 overflow-scroll">
                <Stream albumCover="https://images.unsplash.com/photo-1603748623205-8665c0836241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" 
                name="Trying not to care" custom={custom} rounded={true}></Stream>
                <Stream albumCover="https://images.unsplash.com/photo-1690159291340-3f8e1d8b4041?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" 
                name="I say what I want" custom={custom} rounded={true}></Stream>
                 <Stream albumCover="https://images.unsplash.com/photo-1690671667654-618d5ad38b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" 
                name="Glow up energy" custom={custom} rounded={true}></Stream>
                 <Stream albumCover="https://images.unsplash.com/photo-1690758492063-0e2392a15bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" 
                name="The work it pod" custom={custom} rounded={true}></Stream>

               </div>
        </div>
    )
}

export default SuggestedMusic;