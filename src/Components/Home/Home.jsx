import { useEffect } from "react";
import StarLine from "../StarLine/StarLine";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <section id="home">
      <div className="container min-h-100 py-2 d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 text-center">
          <div className="mb-4">
            <img
              src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
              alt="main pic or something"
              width="250"
            />
          </div>
          <h2>START FRAMEWORK</h2>
          <StarLine />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  );
}
