import ContentTop from "../Content/ContentTop";
import SlideBar from "../slidebar/SlideBar";
import "../Layout/LayOut.css"
export default function LayOut() {

    return (
      <div className="container">
        <SlideBar/>
        <ContentTop/>
        
      </div>
    );
  }