import VideoFile from "./videoPlayer/VideoComp";

const NewFeature = () => {
    return (
        <div className="flex justify-center w-full py-4 text-gray-400">
            <div className="py-6 grow basis-1/4 h-80 mr-2 px-8 my-4 bg-slate-700 bg-opacity-40 rounded" 
            style={{
                background: "radial-gradient(circle, #1b9aaa 0%, #001d3d 100%)"
            }}>
                    <div className="">
                        <h1 className="text-2xl font-bold w-64 text-white my-4">Video now supported on ExStream!</h1>

                      {/*  <button className="w-40 h-40 p-2 mx-4 text-5xl text-white bg-black bg-opacity-30 rounded-full">
                                <i className="fa-solid fa-play"></i>
                    </button> */}
                    <img src="https://images.unsplash.com/photo-1522777183857-cb4be6839fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                    alt="music image diamound"
                    className="w-full h-44 rounded object-cover" />
                    </div>
            </div>
            <div className="ml-2 relative grow basis-1/2 h-80 my-4 bg-slate-700 bg-opacity-40 rounded">
                <VideoFile />
            </div>
        </div>
    )
}

export default NewFeature;