function CategoryItem(props) {
    return (
        <div className={`h-[210px] w-full my-[5px] basis-0 grow-1 relative img-zoom`}>
            <div className="thumbnail relative">
                <img src={props.thumbnail} className="w-full h-48 rounded object-cover"/>
                <span className="bg-black absolute text-sm bottom-2 right-2 px-2 rounded">{props.duration}</span>
            </div>
            <div className="absolute bg-black bg-opacity-30 text-2xl text-[#f9f7f3] weight-bold top-0 flex justify-center  items-center w-full h-full">
                <h3 className="text-[#ced4da] font-semibold capitalize text-[18px]">{props.title}</h3>
            </div>
      </div>
    )
}

export default CategoryItem;