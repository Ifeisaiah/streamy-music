function NavBar() {
    return (
      <nav className="w-[20vw] h-full bg-gradient-to-tr from-[#161a1d] from-50% to-slate-900 overflow-y-scroll pt-6 section">
            <h1 className="uppercase text-2xl text-gray-300 font-bold w-[90%] m-auto">Streamy.io</h1>
            <form className="relative group my-8 w-[90%] m-auto">
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="absolute text-gray-400 left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 "
                    aria-hidden="true"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                </svg>
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="relative w-full h-10 bg-transparent border border-gray-600 rounded-full focus:outline-none pl-8"
                />    
            </form>
            <div className="w-[90%] m-auto">
            <div className="mb-4 bg-gray-700 bg-opacity-20 p-4 rounded">
                <h2 className="font-bold text-lg pb-2 text-gray-400 uppercase">menu</h2>
                <NavItem icon={<i className="fa-solid fa-house"></i>} name="Home" />
                <NavItem icon={<i class="fa-solid fa-magnifying-glass"></i>} name="Discover" />
                <NavItem icon={<i className="fa-solid fa-radio"></i>} name="Radio" />
                <NavItem icon={<i className="fa-solid fa-podcast"></i>} name="Podcast" />
            </div>
            <div className="mb-4 bg-gray-700 bg-opacity-25 p-4 rounded">
                <h2 className="font-bold text-lg text-gray-400 pb-2 uppercase">library</h2>
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Album" />
                <NavItem icon={<i className="fa-solid fa-music"></i>} name="Songs" />
                <NavItem icon={<i className="fa-solid fa-user"></i>} name="Artist" />
              
            </div>
            <div className="mb-6 bg-gray-700 bg-opacity-20 p-4 rounded">
                <h2 className="font-bold text-lg text-gray-400 pb-2 uppercase">playlist</h2>
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Born Pink" delete={true} />
            <NavItem icon={<i className="fa-solid fa-folder"></i>} name="The Album" delete={true} />
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Square One" delete={true} />
                <NavItem icon={<i className="fa-solid fa-folder"></i>} name="Square Up" delete={true} />
            </div>
        </div>


      </nav>
    );
  }
  
  const NavItem = (props) => {
    return (
      <div className="flex justify-between items-center hover:text-white text-base text-white my-4">
         <div className="flex items-center">
            <span className="pr-2 flex items-center justify-center rounded-full text-gray-400 block text-lg mr-2">
               {props.icon}
            </span>
            <a href="#!" className="">
            {props.name}
            </a>
        </div>
        {props.delete && <div className="">
            <i class="fa-solid fa-trash"></i>
            </div>
        }
      </div>
    );
  };
  
export default NavBar;