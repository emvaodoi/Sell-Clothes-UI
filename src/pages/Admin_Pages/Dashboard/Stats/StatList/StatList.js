import React from "react";
import StatItem from "../StatItem/StatItem";

function StatList() {
  return (
    <div className="row">
      <StatItem
        title="Số khách ghé thăm"
        quantity="3010"
        percent={10}
        subTitle="Since last month"
        icon="user-run"
        backgroundColor="red"
      />
      <StatItem
        title="Tổng sản phẩm đã bán"
        quantity="3010"
        percent={10.5}
        subTitle="Since last month"
        icon="basket"
        backgroundColor="orange"
      />
      <StatItem
        title="Tổng doanh thu"
        quantity="3010"
        percent={10.5}
        subTitle="Since last year"
        icon="money-coins"
        backgroundColor="green"
      />
      <StatItem
        title="Sản phẩm đã bán trong tháng"
        quantity="3010"
        percent={10.5}
        subTitle="Since last year"
        icon="satisfied"
        backgroundColor="purple"
      />
      <StatItem
        title="Doanh thu trong tháng"
        quantity="3010"
        percent={10.5}
        subTitle="Since last year"
        icon="money-coins"
        backgroundColor="danger"
      />
    </div>
  );
}

export default StatList;
