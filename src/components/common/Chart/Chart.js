import React from "react";
import chart from "chart.js";
import { Bar, HorizontalBar } from "react-chartjs-2";

const Chart = () => {
  return (
    <Bar
      height={170}
      data={{
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
        ],
        datasets: [
          {
            label: "Sold ( Clothes )",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#3cba9f",
              "#c45850",
            ],
            data: [
              1478,
              1267,
              734,
              784,
              433,
              100,
              201,
              325,
              234,
              552,
              1000,
              500,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: "Doanh thu từng tháng năm 2020 ( Nghìn VND )",
        },
      }}
    />
  );
};

export const Chart_1 = () => {
  return (
    <div>
      <HorizontalBar
        data={{
          labels: ["AEKDQ", "February", "March", "April"],
          datasets: [
            {
              label: "Đã bán",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
              data: [1478, 1267, 734, 784],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: "Top sản phẩm bán chạy ( Chiếc )",
          },
        }}
      />
      <div className="mt-3 mb-1 text-bold font-weight-bold">Chú thích:</div>
      <div
        style={{
          fontSize: 13,
          paddingBottom: 5,
        }}
      >
        <span style={{ fontWeight: 600 }}>AEKDQ </span>:{" "}
        <span>Áo Anh không đòi quà</span>
      </div>
    </div>
  );
};

export default Chart;
