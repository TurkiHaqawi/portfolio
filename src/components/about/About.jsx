import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://st2.depositphotos.com/3559811/7956/i/600/depositphotos_79567812-stock-photo-professional-creative-graphic-designer-desk.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">I'm Turki Ahmed Haqawi.</p>
        <p className="a-desc">
          Bachelor of Information Technology. I got my second honors degree in
          IT at the University. <br />
          Self-Learning, Technology Interested. A bilingual software developer
          who is customer-driven and enjoys working as part of a team. An
          excellent communicator with the ability to meet deadlines and quickly
          resolve issues.
        </p>
      </div>
    </div>
  );
};

export default About;
