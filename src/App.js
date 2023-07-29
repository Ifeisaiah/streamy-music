import './App.css';
import NavBar from './Navigation/Navbar';
import MainContent from './Main Content/Maincontent';
import SideBar from './Side bar/Sidebar';
import Player from './mediaPlayer/player';

function App() {
  return (
    <>
    <div className="App w-[100vw] h-[100vh] flex">
      <NavBar />
      <MainContent />
      <SideBar />
    </div>
  
    </>
  );
}

export default App;
