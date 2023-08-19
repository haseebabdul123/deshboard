import './App.css'
import ContentTop from './components/Content/ContentTop';
import SideContent from './components/Content/SideContent';
import SlideBar from "./components/slidebar/SlideBar"
function App() {
  return (
    <div className="App" >
          <SlideBar/>
          <ContentTop/>
          <SideContent/>
          
    </div>
  );
}

export default App;
