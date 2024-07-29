import PortfolioRow from "../PortfolioRow/PortfolioRow";
import StarLine from "../StarLine/StarLine";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container d-flex flex-column gap-3 align-items-center justify-content-center">
        <h2>PORTFOLIO COMPONENT</h2>
        <StarLine lineClr={"#2c3e50"} />
        <PortfolioRow />
      </div>
    </section>
  );
}
