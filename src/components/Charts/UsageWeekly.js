import React from 'react';
import { Pie } from 'react-chartjs-2';

const UsageWeekly = ({ type }) => {
  const wasted = Math.floor(Math.random() * 10);
  const shared = Math.floor(Math.random() * 30);
  const used = 100 - shared - wasted;
  const data = {
    labels: ['Wasted', 'By you', 'Shared'],
    datasets: [
      {
        data: [wasted, used, shared],
        backgroundColor: ['#f50057', '#3f51b5', '#FFCE56'],
        hoverBackgroundColor: ['#f50057', '#3f51b5', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>{type} weekly usage </h2>
      <Pie data={data} />
    </div>
  );
};

export default UsageWeekly;
