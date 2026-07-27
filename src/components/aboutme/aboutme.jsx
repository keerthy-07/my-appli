import "./aboutme.css";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Django",
    "MySQL",
    "Bootstrap",
    "Tailwind CSS",
    "REST API",
    "VS Code",
    "Git&GitHub",
  ];

  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-left">
          <h2> About Me</h2>

          <p>
            Passionate Full Stack Developer who loves turning ideas into
            real-world applications. I enjoy solving problems, learning new
            technologies and building products that make a difference.
          </p>

          <ul>
            <li>➤ Problem Solver</li>
            <li>➤ Fast Learner</li>
            <li>➤ Team Player</li>
            <li>➤ Clean Code Lover</li>
          </ul>

          <button className="about-btn">Know More About Me →</button>
        </div>

        <div className="about-right">
          <h2> My Skills</h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-box" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
