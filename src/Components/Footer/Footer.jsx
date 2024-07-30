import { FaFacebook, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-center p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-4">
              <div className="inner">
                <h2>Location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="inner">
                <h2>AROUND THE WEB</h2>
                <div className="social d-flex gap-2 justify-content-center flex-nowrap">
                  <div className="social-icon">
                    <FaFacebook />
                  </div>
                  <div className="social-icon">
                    <FaTwitter />
                  </div>
                  <div className="social-icon">
                    <FaLinkedinIn />
                  </div>
                  <div className="social-icon">
                    <FaGlobe />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="inner">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center copyright">
        Copyright &copy; Your Website 2021
      </p>
    </>
  );
}
