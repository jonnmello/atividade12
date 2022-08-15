import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name?: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 10,
      labels: {
        colors: ['#b4bed2']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 10
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Number(val).toFixed(2) + '%';
      }
    },
    plotOptions: {
      pie: {
        size: 500,
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '36px',
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '24px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};
