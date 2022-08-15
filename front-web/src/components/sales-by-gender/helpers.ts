import { SalesByGenderType } from 'types/types';
import { formatGenderPTBR } from 'utils/formatters';

export const sumSalesByGender = (salesByGender: SalesByGenderType[] = []) => {
  return salesByGender.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};

export const buildSalesByGenderChart = (sales: SalesByGenderType[]) => {
  const labels = sales.map((sale) => formatGenderPTBR(sale.gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
