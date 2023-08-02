import CategoryItem from "./categoryItem";

function Category() {
    return (
    <div className="w-full my-14">
        <div className="flex justify-between w-full">
            <h1 className="font-bold text-2xl pb-2">Explore popular category</h1>
            <a href="#!" className="font-bold text-gray-400">See all</a>
        </div>
        <div className="suggested-stream w-[100%] grid gap-2 mt-2 ">
         <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" 
           title="food and health"
           />
           <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmslMjBvdXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=900&q=60" 
           title="fitness"
           />
           <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1593340010859-83edd3d6d13f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60" 
           title="books"
           />
           <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcnklMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" 
           title="story and fiction"
           />
           <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1684745290208-af72414fa1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60" 
           title="business and finance"
           />
           <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1596382940920-9f73b2d15901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hZ2F6aW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" 
           title="celebrity and lifestyle"
           />
           <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1616348490852-d80c545b4f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60" 
           title="fashion and style"
           />
           <CategoryItem 
           thumbnail="https://images.unsplash.com/photo-1690148136337-2304c30b5420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60" 
           title="self improvement"
           />
           
        </div>
    </div>
    )
}

export default Category;