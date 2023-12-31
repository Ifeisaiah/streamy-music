import SuggestedPodcast from "./suggestedPodcast"
import SuggestedMusic from "./suggestedMusic"
import NewFeature from "./newfeature"
import SuggestedVideos from "./suggestedVideo"
import Category from "../category/category"


function HomePage() {
    return (
     
            <div className="w-[98%] mt-4 p-4 m-auto">
                <div className="text-lg text-gray-400 ">
                    <button className="bg-black bg-opacity-40 w-12 h-12 rounded-full active:scale-90 mr-2">
                        <i class="fa-sharp fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="bg-black bg-opacity-40 w-12 h-12 rounded-full active:scale-90">
                        <i class="fa-sharp fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div className="py-6">
                    
                 <FrontPage />
               
                    <div className="py-4 text-gray-400">
                        <div>
                            <span>Global</span>
                            <div className="flex justify-between items-center">
                                <h1 className="text-4xl text-white font-bold">Top 10</h1>
                                <a href="#!" className="font-bold">See all</a>
                            </div>
                        </div>
                       <SongTable />
                    </div>
                </div>
                <SuggestedPodcast />
                <SuggestedMusic />
                <NewFeature />
               <Category />

            </div>

    )
}
const FrontPage = () => {
    return (
        <div className="py-4 text-gray-400">
            <div>
                <span>Top</span>
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl text-white font-bold">Trending</h1>
                    <a href="#!" className="font-bold">See all</a>
                </div>
            </div>
            <div className="py-8 px-10 my-4 bg-gradient-to-tr from-black from-30% via-[#1b9aaa] to-[#297373 ] bg-opacity-40 rounded">
                    <div className="">
                        <span className="text-lg font-bold">Playlist</span>
                        <h1 className="text-5xl font-bold w-60 text-white my-4">Top Song Of The Week</h1>
                        <button className="rounded-full p-4 px-6 text-black bg-white mr-2 active:scale-90">
                        <i class="fa-solid fa-play px-2"></i>
                            Play
                        </button>
                        <button className="rounded-full p-4 px-6 text-white bg-gray-700 active:scale-90">View Playlist</button>
                    </div>
            </div>
        </div>
    )
}


const SongTable = () => {
    return (
    <section className="container my-4">
        <table className="text-base min-w-full divide-y divide-gray-800">
            <thead className="">
                <tr>
                    <th scope="col" className="px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                     <span className="text-lg pr-2">#</span>   Song Name
                    </th>

                    <th scope="col" className="px-4 py-3.5 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Artist
                    </th>

                    <th scope="col" className="px-4 py-3.5 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Time
                    </th>

                    <th scope="col" className="px-4 py-3.5 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Like
                    </th>

                </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
                <SongItem 
                artist="New Jeans"
                img="https://images.unsplash.com/photo-1687360440886-f220f137a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                songName="OMG"
                id="01"
                songDuration="3:09"
                />

               <SongItem 
                artist="Jungkook"
                img="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                songName="Seven"
                id="02" 
                songDuration="3:24"
                />

                 <SongItem 
                artist="Ottoboy"
                img="https://images.unsplash.com/photo-1597339254750-c8491f2f8209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                songName="Sugarcrash"
                id="03"
                songDuration="2:03"
                />

                 <SongItem 
                artist="BTS"
                img="https://images.unsplash.com/photo-1585435669168-f4cc3f5d1b8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
                songName="On"
                id="04"
                songDuration="3:01"
                />

                 <SongItem 
                artist="Skyler Grey"
                img="https://images.unsplash.com/photo-1610319620417-dc9759bb361c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
                songName="Bed of lies"
                id="05" 
                songDuration="3:10"
                />

            </tbody>
    </table>
    </section>
    )
}

const SongItem = (props) => {
    return (
        <>
        <tr className="hover:bg-gray-700 hover:bg-opacity-30 hover:scale-105 bg-opacity-100 rounded transition ease-out duration-300">
        <td className="px-4 py-4 text-gray-600  flex items-center">
            <span className="pr-4 text-lg text-gray-400">{props.id}</span>
            <div className="flex items-center gap-x-2">
                <img className="object-cover w-14 h-14 rounded mr-4" 
                src={props.img}
                alt="song img" />
                <div>
                    <a href="#!" className="font-bold text-lg text-white">{props.songName}</a>
                </div>
            </div>
        </td>
        <td className="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <a href="#!">{props.artist}</a>
        </td>
        <td className="px-4 py-4">
            <div className="font-bold text-lg text-white">
                <span>{props.songDuration}</span>
            </div>
        </td>
        
        <td className="px-4 py-4">
            <div className="w-18 flex justify-between">
                <span className="text-base"><i className="fa-solid text-red-500 fa-heart"></i> 1K</span>
                <span className=""><i className="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
        </td>
    </tr>
</>
    )
}
export default HomePage;