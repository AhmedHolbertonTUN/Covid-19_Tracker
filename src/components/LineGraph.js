import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph(props) {
  return (
    <div style={{ width: "600px", height: "600px", margin: "25px auto" }}>
      {props.show ? (
        <></>
      ) : (
        <Line
          data={{
            labels: props.x,
            datasets: [
              {
                label: "Total Cases",
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.2,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 10,
                data: props.y,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
