import Artist from "../Main Content/artist";

function NavBar() {
    return (
      <nav className="w-[280px] h-full bg-[#080f16] shrink-0  overflow-y-scroll pt-6 section">
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
                    artistName="FIFTY FIFTY"
                    img="https://images.unsplash.com/photo-1690460550070-e73402127f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
                    songName="Cupid"
                />

                <Artist
                    artistName="Broods"
                    img="https://images.unsplash.com/photo-1690643617319-1db00553ddec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Everygreen"
                  
                />
                <Artist
                    artistName="Amaarea"
                    img="https://i.pinimg.com/474x/00/94/cb/0094cb2967ab4a30c2bcfb5a170c109b.jpg"
                    songName="Sad girl loves money"
                  
                />

                <Artist
                    artistName="Taylor Swift"
                    img="https://images.unsplash.com/photo-1690887060667-76eee2922806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Wildest dreams"
                   
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
                    img="https://images.unsplash.com/photo-1690672207985-2d64ee483d28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Save me"
                  
                />

                <Artist
                    artistName="Camila Cabello"
                    img="https://images.unsplash.com/photo-1690753360771-9820effe4461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Havannah"
                  
                />
                <Artist
                    artistName="New Jeans"
                    img="https://images.unsplash.com/photo-1690743300330-d190ad8f97dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Super shy"
                  
                />

                <Artist
                    artistName="Justin Bieber"
                    img="https://images.unsplash.com/photo-1690636169128-34a4a1bce684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                    songName="Yummy"
                   
                />
            </div>
        </div>
      </nav>
    );
  }
  const NavItem = (props) => {
    return (
      <div className="flex justify-between hover:bg-gray-700 hover:bg-opacity-50 rounded items-center  text-base text-[#ced4da] py-2 my-[4px]">
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