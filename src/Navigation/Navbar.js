import Artist from "../Main Content/homepage/artist";

function NavBar() {
    return (
      <nav className="w-[290px] h-full bg-[#080f16] shrink-0  overflow-y-scroll pt-6 section">
        <div className="flex  w-[85%] m-auto">
            <span className="text-white font-bold text-lg"><i class="fa-solid fa-bars"></i></span>
            <h1 className="uppercase text-lg ml-2 text-gray-300 font-bold">ExStream.com</h1>
        </div>
           
            <div className="w-[95%] mt-12 m-auto">
            <div className="mb-4 p-2 rounded">
                <h2 className="font-bold text-lg pb-2 text-gray-400 uppercase">menu</h2>
                <NavItem icon={<i className="fa-solid fa-house"></i>} name="Home" />
                <NavItem icon={<i class="fa-solid fa-magnifying-glass"></i>} name="Discover" />
                <NavItem icon={<i className="fa-solid fa-radio"></i>} name="Radio" />
                <NavItem icon={<i className="fa-solid fa-podcast"></i>} name="Podcast" />
            </div>
            <div className="mb-4 p-2 rounded">
                <h2 className="font-bold text-lg text-gray-400 pb-2 uppercase">library</h2>
                {/*
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Album" />
                <NavItem icon={<i className="fa-solid fa-music"></i>} name="Songs" />
                <NavItem icon={<i className="fa-solid fa-user"></i>} name="Artist" />
                */}
                <Artist
                    artistName="BTS"
                    img="https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="On"
                  
                />

                <Artist
                    artistName="Skyler Grey"
                    img="https://images.unsplash.com/photo-1689516584144-b67d904acc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Bed of lies"
                  
                />
                <Artist
                    artistName="Jungkook"
                    img="https://images.unsplash.com/photo-1689426131363-412b430fe109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Seven"
                  
                />

                <Artist
                    artistName="Ottoboy"
                    img="https://images.unsplash.com/photo-1687253363362-d2c7add0919e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Sugarcrash"
                   
                />
              
            </div>
            <div className="mb-6 p-2  rounded">
                <h2 className="font-bold text-lg text-gray-400 pb-2 uppercase">playlist</h2>
             {/*   <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Born Pink" delete={true} />
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="The Album" delete={true} />
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Square One" delete={true} />
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Square Up" delete={true} />
            */}
              <Artist
                    artistName="BTS"
                    img="https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="On"
                  
                />

                <Artist
                    artistName="Skyler Grey"
                    img="https://images.unsplash.com/photo-1689516584144-b67d904acc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Bed of lies"
                  
                />
                <Artist
                    artistName="Jungkook"
                    img="https://images.unsplash.com/photo-1689426131363-412b430fe109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Seven"
                  
                />

                <Artist
                    artistName="Ottoboy"
                    img="https://images.unsplash.com/photo-1687253363362-d2c7add0919e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Sugarcrash"
                   
                />
            </div>
        </div>


      </nav>
    );
  }
  const NavItem = (props) => {
    return (
      <div className="flex justify-between hover:bg-gray-700 hover:bg-opacity-50 rounded items-center hover:text-white text-base text-white py-2 my-[4px]">
         <div className="flex items-center">
            <span className="pr-2 flex items-center justify-center rounded-full text-gray-400 block text-lg mr-2">
               {props.icon}
            </span>
            <a href="#!" className="text-lg">
            {props.name}
            </a>
        </div>
        { props.delete && <div className="">
            <i class="fa-solid fa-trash"></i>
            </div>
        }
      </div>
    );
  };
  
export default NavBar;