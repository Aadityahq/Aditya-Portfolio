const devSkills = [
  { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoZsMBFkU9ArhUL_HlgeESChICNA1cZcIZg&s" },
];

const backendSkills = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const languageSkills = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  // { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Core Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

const otherSkills = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Netlify", icon: "https://api.iconify.design/logos/netlify.svg" },
  { name: "Vercel", icon: "https://api.iconify.design/logos/vercel.svg" },
  { name: "Render", icon: "https://cdn.worldvectorlogo.com/logos/render-1.svg" }, // ✅ Added Render
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Canva", icon: "https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];


export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <p className="text-center">
          Here are some of my skills on which I have been working for the past 2 years.
        </p>

        <div className="row">
          {/* Frontend Section */}
          <div className="col-md-6 col-lg-3">
            <div className="skills-box">
              <h3 className="text-center">Frontend</h3>
              <div className="skills-grid">
                {devSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className="col-md-6 col-lg-3">
            <div className="skills-box">
              <h3 className="text-center">Backend</h3>
              <div className="skills-grid">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="col-md-6 col-lg-3">
            <div className="skills-box">
              <h3 className="text-center">Languages</h3>
              <div className="skills-grid">
                {languageSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Others Section */}
          <div className="col-md-6 col-lg-3">
            <div className="skills-box">
              <h3 className="text-center">Others</h3>
              <div className="skills-grid">
                {otherSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
