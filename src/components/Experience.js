const experiences = [
   {
    title: "Frontend Developer Intern",
    role: "Internship",
    date: "May, 2025 - Jul, 2025",
    company: "Celebal Technology",
    description:
      "Worked as a Frontend Developer Intern, building responsive and user-friendly web applications using React.js. Contributed to UI improvements and implemented reusable components to optimize performance.",
    skills: ["React.js", "JavaScript", "Frontend Development", "UI/UX"],
    logo: "https://d7umqicpi7263.cloudfront.net/img/product/06dc2389-a145-4ca6-9c5c-1b696cc07bbb.com/9e70ab8856aab32210687e4e2b9bc1b4",
  },
  {
    title: "Smart India Hackathon",
    role: "Grand Finalist Team",
    date: "Dec, 2023",
    company: "Team BitWise DECOY",
    description:
      "Showcased problem-solving skills and innovation in addressing real-world challenges to develop and present technology-based solutions, demonstrating adaptability and teamwork.",
    skills: ["Development", "Team Management", "Presentation Design"],
    logo: "https://media.licdn.com/dms/image/v2/D4E12AQFxMoJkWy-aKg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725533114805?e=2147483647&v=beta&t=n3oPsphJjPG-YAm8eDKz6Y0eopbDxCZ0x5veWLGf75Y",
  },

  {
    title: "Core Member",
    role: "Full Time",
    date: "2022 - Present",
    company: "Entrepreneurship Development Cell, BCET",
    description:
      "Serving as a core member of the Entrepreneurship Development Cell at BCET, organizing events, mentoring peers, and fostering a culture of innovation and startup ecosystem awareness.",
    skills: ["Leadership", "Team Collaboration", "Entrepreneurship"],
    logo: "https://scontent.frdp5-1.fna.fbcdn.net/v/t39.30808-6/327212960_723221076032273_4855701081156529886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CFLKgzDK_JEQ7kNvwE1gwVB&_nc_oc=Adm8qxBEiBJP_CSiE5vbzNfyW4kwBvFGcCGnypu4Mn9qEnBhVTgRBpp9xbe3KptEWXs&_nc_zt=23&_nc_ht=scontent.frdp5-1.fna&_nc_gid=oAmvkfT_61sKp9ltGEAZMg&oh=00_AfYTVIrLMY5MUzWQs6fuORJ-DGpYID-2InNQ6hpaHeo6WA&oe=68C4F10E"
},
];




export const Experience = () => {
  return (
  <section id="experience" className="experience">
  <div className="container">
    <h2 className="text-center mb-4">Experience</h2>
    <p className="text-center">
      My work experience as a software engineer and involvement in projects & hackathons.
    </p>

    {/* ✅ Box Wrapper */}
    <div className="experience-box">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <img src={exp.logo} alt={exp.title} className="exp-logo" />
              <h4>{exp.title}</h4>
              <p className="exp-role">{exp.role} • {exp.date}</p>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.description}</p>
              <p className="exp-skills">
                <strong>Skills:</strong> {exp.skills.join(" • ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};
