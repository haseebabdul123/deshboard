import { useState } from "react";
import "./style.css";
import { FaEye, FaPeopleCarry, FaThumbsUp, FaFileExport, FaInstagram,FaFacebook,FaPinterest,FaLinkedinIn } from "react-icons/fa";
import Chart from "react-apexcharts"
export default function ContentTop() {
  const [state ,setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
  
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <h2>Good Morning, Abdul Haseeb!</h2>
      </div>
      <div className="content-left">
        <h2>Overview</h2>
        <div className="cards">
          <div>
            <div>
              <FaEye /> <h4>Views</h4> <span>34,456</span>{" "}
            </div>
          </div>

          <div>
            <FaPeopleCarry /> <h4>Follower</h4> <span>34,456</span>
          </div>
          <div>
            <FaThumbsUp /> <h4>Likes</h4> <span>34,456</span>
          </div>
          <div>
            <FaFileExport /> <h4>Saved Post</h4> <span>34,456</span>
          </div>
        </div>
      </div>
      <div className="content-main-bottom">
        <div>
          <h2>Follower Static</h2>
        </div>
      <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
  
      </div>
      <div className="bottom-left">
              <h2>Social Accounts</h2>
            </div>
            <div className="social-cards">
          <div>
            <div>
              <FaInstagram /> <h4>Instagram</h4> <span>34,456</span>{" "}
            </div>
          </div>

          <div>
            <FaFacebook /> <h4>Facebook</h4> <span>34,456</span>
          </div>
          <div>
            <FaPinterest /> <h4>Pinterest</h4> <span>34,456</span>
          </div>
          <div>
            <FaLinkedinIn /> <h4>Linked In</h4> <span>34,456</span>
          </div>
        </div>
    </div>
    
  );
}
