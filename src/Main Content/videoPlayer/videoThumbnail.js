function VideoThumbnail(props) {
    return (
        <div className={`h-[210px] w-full my-4 basis-0 grow-1`}>
            <div className="thumbnail relative">
                <img src={props.thumbnail} className="w-full rounded object-cover"/>
                <span className="bg-black absolute text-sm bottom-2 right-2 px-2 rounded">{props.duration}</span>
            </div>
            <div className="flex items-center space-x-2 mt-[3px]">
                <img src={props.profileImg}  className="h-10 w-10 rounded-full object-cover" alt="The video's Thumbnail"/>
              
                <div className="text-gray-400">
                    <h3 className="text-[#ced4da] font-medium text-[18px]">{props.title}</h3>
                    <span>{props.name}</span>
                    <br/>
                    <span>{props.views} . {props.daysposted}</span> 
            
                 </div>
        </div>
      </div>
    )
}

export default VideoThumbnail;