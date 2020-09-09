import React from "react";

function StatItem({
  title,
  quantity,
  percent,
  subTitle,
  icon,
  backgroundColor,
}) {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="card card-stats">
        {/* Card body */}
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title text-uppercase text-muted mb-0">
                {title}
              </h5>
              <span className="h2 font-weight-bold mb-0">{quantity}</span>
            </div>
            <div className="col-auto">
              <div
                className={`icon icon-shape bg-gradient-${backgroundColor} text-white rounded-circle shadow`}
              >
                <i className={`ni ni-${icon}`} />
              </div>
            </div>
          </div>
          <p className="mt-3 mb-0 text-sm">
            <span className="text-success mr-2">
              <i className="fa fa-arrow-up" /> {percent}%
            </span>
            <span className="text-nowrap">{subTitle}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatItem;
