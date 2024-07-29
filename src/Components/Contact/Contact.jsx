import { useState } from "react";
import StarLine from "../StarLine/StarLine";

export default function Contact() {
  const [inputs, setInputs] = useState([
    { type: "text", label: "userName :" },
    { type: "number", label: "userAge :" },
    { type: "email", label: "userEmail :" },
    { type: "password", label: "userPassword :" },
  ]);
  return (
    <section id="contact">
      <div className="container d-flex flex-column gap-3  justify-content-center">
        <h2>CONTACT SECTION</h2>
        <StarLine lineClr={"#2c3e50"} />
        {inputs.map(({ type, label }) => {
          return (
            <div className="form-floating mb-3">
              <input
                type={type}
                className="form-control"
                id="floatingInput"
                placeholder={label}
              />
              <label htmlFor="floatingInput">{label}</label>
            </div>
          );
        })}
        <button className="btn btn-success w-25">Send Message</button>
      </div>
    </section>
  );
}
