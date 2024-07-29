import { FaStar } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function StarLine({ lineClr }) {
  return (
    <div className="d-flex align-items-center gap-4 justify-content-center">
      <div
        className="line"
        style={{ backgroundColor: lineClr || "#fff" }}
      ></div>
      <FaStar />
      <div
        className="line"
        style={{ backgroundColor: lineClr || "#fff" }}
      ></div>
    </div>
  );
}
