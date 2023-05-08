import "./styles/Skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__header">Skills</h2>

      <div className="skills__container">
        <div className="skill">
          <h3 className="skill__name">HTML</h3>
          <div className="skill__bar">
            <div className="skill__fill" style={{ width: "90%" }}>
              <span className="skill__percent">90%</span>
            </div>
          </div>
        </div>

        <div className="skill">
          <h3 className="skill__name">CSS</h3>
          <div className="skill__bar">
            <div className="skill__fill" style={{ width: "85%" }}>
              <span className="skill__percent">85%</span>
            </div>
          </div>
        </div>

        <div className="skill">
          <h3 className="skill__name">JavaScript</h3>
          <div className="skill__bar">
            <div className="skill__fill" style={{ width: "80%" }}>
              <span className="skill__percent">80%</span>
            </div>
          </div>
        </div>

        <div className="skill">
          <h3 className="skill__name">Django</h3>
          <div className="skill__bar">
            <div className="skill__fill" style={{ width: "70%" }}>
              <span className="skill__percent">70%</span>
            </div>
          </div>
        </div>

        <div className="skill">
          <h3 className="skill__name">React</h3>
          <div className="skill__bar">
            <div className="skill__fill" style={{ width: "75%" }}>
              <span className="skill__percent">75%</span>
            </div>
          </div>
        </div>

        <div className="skill">
          <h3 className="skill__name">Bootstrap</h3>
          <div className="skill__bar">
            <div className="skill__fill" style={{ width: "80%" }}>
              <span className="skill__percent">80%</span>
            </div>
          </div>
        </div>

        <div className="skill">
          <h3 className="skill__name">HTML Canvas</h3>
          <div className="skill__bar">
            <div className="skill__fill" style={{ width: "60%" }}>
              <span className="skill__percent">60%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
