import "./intro.css";
import myImg from "../../img/myImg.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Turki Haqawi</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Designer</div>
            </div>
          </div>
          <p className="i-desc">
            Design and Develop Websits for someone need me
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={myImg} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
