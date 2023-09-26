
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  console.log(data);
  // Define your chart data and options here
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: ['#FF5733', '#33FF57'], // You can customize the colors
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // Add other Chart.js options as needed
  };

  return (
    <div>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
