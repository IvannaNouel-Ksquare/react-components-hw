import mac from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/mac.png";
import iphone from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/iphone.png";
import airpods from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/airpods.png";
import ipad from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/ipad.png";
import applewatch from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/applewatch.png";
import airtag from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/airtag.png";
import appletv from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/appletv.png";
import homepod from "/Users/ivannanouel/Documents/Personal/landingpage/src/assets/img/homepod.png";

function Stroller() {
  return (
    <div className="container-3">
    <div className="stroller">
    <img src={mac} className="pic" alt="mac" />
    <span className="undertext">Mac</span>
   </div>
   <div className="stroller">
    <img src={iphone} className="pic" alt="iphone" />
    <span className="undertext">iPhone</span>
   </div>
   <div className="stroller">
    <img src={ipad} className="pic" alt="ipad" />
    <span className="undertext">iPad</span>
   </div>
   <div className="stroller">
    <img src={applewatch} className="pic" alt="applewatch" />
    <span className="undertext">Apple Watch</span>
   </div>
   <div className="stroller">
    <img src={airpods} className="pic" alt="airpods" />
    <span className="undertext">AirPods</span>
   </div>
   <div className="stroller">
    <img src={airtag} className="pic" alt="airtag" />
    <span className="undertext">AirTag</span>
   </div>
   <div className="stroller">
    <img src={appletv} className="pic" alt="Apple TV 4K" />
    <span className="undertext">Apple TV 4K</span>
   </div>
   <div className="stroller">
    <img src={homepod} className="pic" alt="HomePod mini" />
    <span className="undertext">HomePod mini</span>
   </div>
    </div>  
    );
}

export default Stroller;
