import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import TopArea from './Components/TopArea';
import Search from './Components/Search';
import HomeGrid from './Components/HomeGrid';
import {MainProvider} from './contexts/MainContext';
import DetailsModal from './Components/DetailsModal';
function App() {
  return (
    <MainProvider>
      <NavbarComponent />
      <TopArea />
      <Search />
      <HomeGrid />
      <DetailsModal/>
    </MainProvider>
  );
}

export default App;
