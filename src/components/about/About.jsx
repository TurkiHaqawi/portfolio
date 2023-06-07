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
        <ol>
          <li>
            <strong className="a-title-strong">Professional Experience at Nana:</strong> With one and a half years of industry experience as a Backend Developer at Nana Company, I have been involved in various impactful projects:
            <ul>
              <li>
                <strong className="a-title-strong">AutoAssign System:</strong> Collaborated With team to rebuild the one of the main components in AutoAssign through <strong>Python</strong> and successfully implement its functionality, achieving a remarkable 100% automatic assignment in part we rebuild it, and fixing bugs in other components in AutoAssign and deal with <strong>(SQL Database, Debezuim, Kakfk, MongoDB, ...etc)</strong>
              </li>
              <li>
                <strong className="a-title-strong">Third-Party Integration:</strong> Collaborated with a cross-functional team to integrate our system with a third-party service through <strong>REST APIs</strong>, providing assignment and routs for our agents. This experience enhanced my ability to work collaboratively and effectively communicate with different stakeholders.
              </li>
              <li>
                <strong className="a-title-strong">Event Sourcing Bug Fixes:</strong> Contributed to a project focused on resolving bugs within a new architecture known as Event Sourcing, through <strong>GoLang</strong> programming language. This opportunity allowed me to expand my technical proficiency and adapt to new technologies and development paradigms.
              </li>
            </ul>
          </li>
          <li>
          <strong className="a-title-strong">Full Stack Developer BootCamp at SAFCSP:</strong> I further enhanced my skills through an intensive <strong>Full Stack Developer</strong> BootCamp. During this program, I gained hands-on experience and proficiency in a wide range of technologies including <strong>React, NodeJS, ExpressJS, and MongoDB</strong>.
          </li>
          <li>
            <strong className="a-title-strong">Bachelor of Information Technology at Tabuk University:</strong> I graduated with second honors in Information Technology from the University, showcasing my commitment to academic excellence.
          </li>
          <li>
            <strong className="a-title-strong">Overall:</strong> I am a results-oriented backend engineer with a strong track record of delivering efficient solutions. My diverse experience, coupled with my continuous learning mindset, equips me to tackle complex challenges and contribute effectively to future projects.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
