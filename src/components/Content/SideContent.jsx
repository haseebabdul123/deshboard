import React from "react";
import {} from "react-icons/fa";
import { personsImgs } from "../../utiles/img";
import "./SideContent.css";
export default function SideContent() {

  return (
    <div className="profile">
      <div className="icons">
        <input type="text" placeholder="Search here" className="search" />
      </div>
      <div className="profile-view">
        <h3>Profile Visitor</h3>
        
        <div className="users-img">
          <img src={personsImgs.person_two} id="imgs" alt="Profile img" />
        </div>
        <span className="name">alice doe</span>

        <div className="loc">
            <h3>Top Location</h3>
        <div className="country-name">Country
        <span className="country">Visitor</span>
        <div className="cou"><img src= {personsImgs.uk} alt="Profile img" /> America <span className="flag">55%</span></div>
        <div className="cou"><img src= {personsImgs.india} alt="Profile img" />India <span className="flag">55%</span></div>
        <div className="cou"><img src= {personsImgs.canada} alt="Profile img" />Canada  <span className="flag">77%</span></div>
        <div className="cou"><img src= {personsImgs.pakistan} alt="Profile img" />Pakistan  <span className="flag">57%</span></div>
        </div>
        
        </div>
      </div>
    </div>
  );
}
