import React from "react";
import miband from "./image/miBand.png";
import miVideo from "./image/VideoMi.mp4";
import "./style/App.css";
const App = () => {
  const PlayVideo=()=>{
    let miVideo=document.getElementById("MiVideo");
    let page1=document.querySelector(".page1");
    let page2=document.querySelector(".page2");
    page1.style.display="none";
    page2.style.display="flex";
    miVideo.play();
    miVideo.addEventListener("ended",function(){
      window.open("https://www.amazon.in/MI-Personal-Activity-Intelligence-Tracking/dp/B08GXC2NTX", "_self");
     })
  }
  const mouseMove = (e) => {
    let mouse = document.getElementById("mouseMove");
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  };
  return (
    <>
      <div className="page1" >
        <div className="mouseMove" id="mouseMove" >
          Click to Buy
        </div>
        <div
          className="main"
          onClick={PlayVideo}
          onMouseMove={(e) => {
            mouseMove(e);
          }}
        >
          <div className="content">
            <div className="inner-Content">
              <h4>OFFERING BEST PRICE</h4>
              <h1>Mi Smart Band 5</h1>
              <h3>Go smart live more</h3>
            </div>
            <div className="Shop-btn">
              <button onClick={PlayVideo}>Shop Now</button>
            </div>
          </div>
          <div className="mIimage">
            <img src={miband} alt="miband" />
          </div>
        </div>
      </div>
      <div className="page2">
        <video src={miVideo} id="MiVideo"></video>
      </div>
    </>
  );
};

export default App;
