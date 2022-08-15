import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  series?: number[];
};

const PieChart = ({ labels = [], series = [] }: Props) => {
  return (
    <div className="pie-chart-card-container">
      <ReactApexChart
        options={buildPieChartConfig(labels)}
        type="donut"
        width="400"
        height="360"
        series={series}
      />
    </div>
  );
};

export default PieChart;
