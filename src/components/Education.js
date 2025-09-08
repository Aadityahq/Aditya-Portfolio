const education = [
  {
    institution: "Bengal College Of Engineering And Technology",
    degree: "Bachelor of Technology – B.Tech, Computer Science And Engineering",
    date: "Sep 2022 – Jun 2026",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science And Engineering. Completed 6 semesters with a CGPA of 7.61. Relevant coursework includes Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    logo: "https://bcetdgp.ac.in/HTML/CIVIL/images/bcet-logo.jpg",
  },
  {
    institution: "Purnea College, Purnea",
    degree: "BSEB (XII), Science",
    date: "Apr 2020 – Apr 2022",
    description:
      "Completed Class 12 education with Science stream at Purnea College Purnea under BSEB board.",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQF51cDeQdrsNg/company-logo_200_200/company-logo_200_200/0/1687792449745?e=2147483647&v=beta&t=kbhdOnYIiKXEpwlqpwfOHa4mAXZuY5lJrwv5FH7LOxY", // placeholder icon, replace with real if you have
  },
   {
    institution: "Indian Public School, Purnea",
    degree: "CBSE (X)",
    date: "Apr 2018 – Apr 2020",
    description:
      "I completed my class 10 education at Indian Public School Purnea, where I studied Science with Computer Application.",
    logo: "https://static.wixstatic.com/media/3e98e0_3c91589768ab4a70ba6c8972436f7640~mv2.png/v1/fill/w_614,h_435,al_c/3e98e0_3c91589768ab4a70ba6c8972436f7640~mv2.pn", // placeholder icon, replace with real if you have
  },
];



export const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="text-center mb-4">Education</h2>
        <p className="text-center">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <img src={edu.logo} alt={edu.institution} className="edu-logo" />
                <h4>{edu.institution}</h4>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-date">{edu.date}</p>
                <p className="edu-desc">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
