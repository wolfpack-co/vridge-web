import React from 'react';
import { Line } from 'react-chartjs-2';

const MoneySaved = () => {
  // #3f51b5
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Money saved',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#3f51b5',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3f51b5',
        pointHoverBorderColor: '#3f51b5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [40, 50, 65, 59, 70, 80, 81],
      },
    ],
  };

  return (
    <div>
      <h2>Line Example</h2>
      <Line data={data} />
    </div>
  );
};

export default MoneySaved;
