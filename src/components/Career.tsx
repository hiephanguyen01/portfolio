import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-end Developer</h4>
                <h5>ANT NEST JSC</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started my professional career as a front-end developer,
              building responsive web interfaces and gaining hands-on
              experience with modern JavaScript frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>VNPLUS Technology & Investment JSC</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked in a hybrid environment of outsourcing and product
              development. Participated in projects, interacting with clients
              to understand requirements. Supported technical processes and
              transferred technology to clients after project completion.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Vihat Software</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and implementing responsive, user-friendly interfaces
              using modern web technologies. Working in a hybrid environment
              of outsourcing and product development, building scalable
              front-end solutions with a deeper understanding of business
              logic and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
