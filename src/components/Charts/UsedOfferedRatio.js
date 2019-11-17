import React from 'react';
import { Bar } from 'react-chartjs-2';

const UsedOfferedRatio = () => {
  const used = Math.floor(Math.random() * 10) + 20;
  const data = {
    labels: ['Used', 'Offered'],
    datasets: [
      {
        label: 'Used',
        backgroundColor: '#3f51b5',
        hoverBackgroundColor: '#3f51b5',
        data: [used],
      },
      {
        label: 'Offered',
        backgroundColor: '#FFCE56',
        hoverBackgroundColor: '#FFCE56',
        data: [50 - used],
      },
    ],
  };

  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default UsedOfferedRatio;
