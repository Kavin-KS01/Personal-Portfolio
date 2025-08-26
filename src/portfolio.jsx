import React from "react";
import profilePic from "./kavin photo.jpg"; // place your image in src folder

export default function Portfolio() {
  const sectionStyle = {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#222",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "12px 24px",
    border: "none",
    borderRadius: "6px",
    background: "linear-gradient(90deg, #ff512f, #dd2476)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "opacity 0.3s ease",
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", lineHeight: 1.6, background: "#fff5f5", color: "#333" }}>
      {/* Navbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 1000, background: "linear-gradient(90deg,#ff512f,#dd2476)", color: "#fff", padding: "15px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Kavin S</h1>
        <nav>
          {['home','about','skills','projects','contact'].map((link) => (
            <a key={link} href={`#${link}`} style={{ margin: "0 10px", color: "#fff", textDecoration: "none", fontWeight: "bold" }}>{link.charAt(0).toUpperCase()+link.slice(1)}</a>
          ))}
        </nav>
      </header>

      {/* Hero with Photo */}
      <section id="home" style={{ ...sectionStyle, textAlign: "center", background: "linear-gradient(180deg,#ffe3e3,#fff0f5,#fff)", borderRadius: "12px" }}>
        <img src={profilePic} alt="Kavin" style={{ width: "160px", height: "160px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 6px 16px rgba(0,0,0,0.25)", marginBottom: "20px", border: "4px solid #ff512f" }} />
        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px", color: "#dd2476" }}>Hi, I'm Kavin 👋</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", color: "#444" }}>
          Enthusiastic and detail-oriented Frontend Developer skilled in HTML,
          CSS, JavaScript, and React.js. Passionate about creating modern,
          accessible, and scalable web solutions.
        </p>
        <a href="https://drive.google.com/file/d/1lp7nbz-XUTyTmgcWiI6UHenC7i_XD_0Z/view?usp=sharing" target="_blank" rel="noreferrer">
          <button style={{ ...buttonStyle, marginTop: "20px" }}>View Resume</button>
        </a>
      </section>

      {/* About */}
      <section id="about" style={sectionStyle}>
        <h2 style={headingStyle}>About Me</h2>
        <div style={{ ...cardStyle, borderLeft: "6px solid #ff512f" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "15px" }}>
              🎓 <b>Frontend Development Training</b> – CRUD Academy (2024–2025)
            </li>
            <li>
              🎓 <b>B.Sc. Computer Science</b> – NGM College, Pollachi (2024)
            </li>
        </ul>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={sectionStyle}>
        <h2 style={headingStyle}>Skills</h2>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div style={{ ...cardStyle, borderTop: "4px solid #ff512f" }}>
            <h3 style={{ color: "#ff512f" }}>Frontend</h3>
            <p>HTML5, CSS3, JavaScript, Bootstrap, Tailwind</p>
          </div>
          <div style={{ ...cardStyle, borderTop: "4px solid #dd2476" }}>
            <h3 style={{ color: "#dd2476" }}>Frameworks</h3>
            <p>React.js, React Hooks, Redux</p>
          </div>
          <div style={{ ...cardStyle, borderTop: "4px solid #ff7f50" }}>
            <h3 style={{ color: "#ff7f50" }}>Tools</h3>
            <p>Git, GitHub, VS Code, Postman</p>
          </div>
          <div style={{ ...cardStyle, borderTop: "4px solid #ffa07a" }}>
            <h3 style={{ color: "#ffa07a" }}>Other</h3>
            <p>Responsive Design, Problem Solving</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ ...sectionStyle, background: "linear-gradient(180deg,#fff0f0,#fff6f0,#ffffff)", borderRadius: "12px" }}>
        <h2 style={headingStyle}>Projects</h2>
        <div style={{ display: "grid", gap: "20px" }}>
          <div style={cardStyle}>
            <h3 style={{ color: "#ff512f" }}>TNSTC Bus Booking UI Clone</h3>
            <p>React.js + CSS, bus search and filter features.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: "#dd2476" }}>Portfolio Website</h3>
            <p>Personal portfolio with smooth navigation and SEO optimization.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: "#ff7f50" }}>E-commerce Product Listing</h3>
            <p>Product cards with search, filter, sort, and responsive design.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ color: "#ffa07a" }}>To-Do List App</h3>
            <p>React CRUD app with LocalStorage and task filters.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={sectionStyle}>
        <h2 style={headingStyle}>Contact</h2>
        <div style={{ ...cardStyle, borderLeft: "6px solid #dd2476" }}>
          <p>📍 Pollachi, Coimbatore, Tamil Nadu</p>
          <p>📧 kavinngm01@gmail.com</p>
          <p>📞 9360763543</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #ddd", background: "linear-gradient(90deg,#ff512f,#dd2476)", color: "#fff" }}>
        <p>© {new Date().getFullYear()} Kavin S • Portfolio Website</p>
      </footer>
    </div>
  );
}
