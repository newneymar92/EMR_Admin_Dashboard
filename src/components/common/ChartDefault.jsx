import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { TYPE_CHART } from '@common/constant';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function ChartDefault({ title, type, label1, label2, isAreaChart }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: title,
        position: 'top',
        color: '#000000',
        padding: 8,
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#000000',
          size: 18,
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 100,
        },
        grid: {
          color: 'transparent',
        },
      },
      x: {
        ticks: {
          color: '#00000',
          size: 18,
          beginAtZero: true,
        },
        grid: {
          color: 'transparent',
        },
      },
    },
  };

  const optionsAreaChart = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: title,
        padding: 8,
        font: {
          size: 20,
        },
        color: '#000000',
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#000000',
          size: 18,
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 100,
        },
        grid: {
          color: 'transparent',
        },
      },
      x: {
        ticks: {
          color: '#00000',
          size: 18,
          beginAtZero: true,
        },
        grid: {
          color: 'transparent',
        },
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const labelsYear = [
    '2019 Q1',
    '2019 Q2',
    '2019 Q3',
    '2019 Q4',
    '2020 Q1',
    '2020 Q2',
    '2020 Q3',
    '2020 Q4',
    '2021 Q1',
    '2021 Q2',
    '2021 Q3',
    '2021 Q4',
    '2022 Q1',
    '2022 Q2',
    '2022 Q3',
    '2022 Q4',
  ];

  const data = {
    labels: labelsYear,
    datasets: [
      {
        fill: true,
        label: label1,
        data: [
          572, 458, 611, 300, 450, 230, 391, 572, 458, 611, 300, 450, 230, 391,
          400, 500,
        ],
        borderColor: '#2f91ff',
        backgroundColor: 'transparent',
      },
      {
        label: label2,
        data: [
          430, 537, 500, 673, 600, 781, 700, 430, 537, 500, 673, 600, 781, 700,
          550, 450,
        ],
        borderColor: '#ced4da',
        backgroundColor: 'transparent',
      },
    ],
  };

  const dataBar = {
    labels,
    datasets: [
      {
        fill: true,
        label: label1,
        data: [572, 458, 611, 300, 450, 230, 391],
        borderColor: '#2f91ff',
        backgroundColor: '#007bff',
      },
      {
        label: label2,
        data: [430, 537, 500, 673, 600, 781, 700],
        borderColor: '#ced4da',
        backgroundColor: '#ced4da',
      },
    ],
  };

  const dataAreaChart = {
    labels,
    datasets: [
      {
        fill: true,
        label: label1,
        data: [897, 753, 768, 102, 66, 82, 493],
        borderColor: '#2f91ff',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      {type === TYPE_CHART.LINE && (
        <div>
          <Line
            className="chart-monthly pa-10"
            options={isAreaChart ? optionsAreaChart : options}
            data={isAreaChart ? dataAreaChart : data}
          />
        </div>
      )}
      {type === TYPE_CHART.BAR && (
        <div>
          <Bar options={options} data={dataBar} />
        </div>
      )}
    </div>
  );
}

ChartDefault.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  label1: PropTypes.string,
  label2: PropTypes.string,
  isAreaChart: PropTypes.bool,
};

export default ChartDefault;
