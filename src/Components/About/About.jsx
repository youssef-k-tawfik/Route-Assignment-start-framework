import { useEffect } from "react";
import StarLine from "../StarLine/StarLine";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <section id="about" className="d-flex align-items-center">
      <div className="container text-center">
        <h2>ABOUT COMPONENT</h2>
        <StarLine />
        <div className="d-flex gap-4 text-start flex-column flex-md-row">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
  );
}
