import { HiPlus } from "react-icons/hi";

export default function PortfolioRow() {
  return (
    <div className="row g-4">
      <div className="col-lg-4 col-md-6">
        <div className="inner rounded-2 bg-primary overflow-hidden">
          <div className="w-100 h-100 position-relative">
            <img src="./port1.png" alt="" className="w-100 block" />
            <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-success plus-icon-bg">
              <HiPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="inner rounded-2 bg-primary overflow-hidden">
          <div className="w-100 h-100 position-relative">
            <img src="./port2.png" alt="" className="w-100 block" />
            <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-success plus-icon-bg">
              <HiPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="inner rounded-2 bg-primary overflow-hidden">
          <div className="w-100 h-100 position-relative">
            <img src="./port3.png" alt="" className="w-100 block" />
            <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-success plus-icon-bg">
              <HiPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="inner rounded-2 bg-primary overflow-hidden">
          <div className="w-100 h-100 position-relative">
            <img src="./port1.png" alt="" className="w-100 block" />
            <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-success plus-icon-bg">
              <HiPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="inner rounded-2 bg-primary overflow-hidden">
          <div className="w-100 h-100 position-relative">
            <img src="./port2.png" alt="" className="w-100 block" />
            <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-success plus-icon-bg">
              <HiPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="inner rounded-2 bg-primary overflow-hidden">
          <div className="w-100 h-100 position-relative">
            <img src="./port3.png" alt="" className="w-100 block" />
            <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-success plus-icon-bg">
              <HiPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
