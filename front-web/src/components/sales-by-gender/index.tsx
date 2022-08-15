import PieChart from 'components/pie-chart-card';
import { PieChartConfig } from 'types/types';
import { useCallback, useEffect, useState } from 'react';
import { makeRequest } from 'utils/request';
import { formatPrice } from '../../utils/formatters';
import { buildSalesByGenderChart, sumSalesByGender } from './helpers';
import Filter, { StoreData } from 'components/filter';
import { AxiosRequestConfig } from 'axios';

import './styles.css';

export type ControlComponentsData = {
  filterData: StoreData;
};

const SalesByGender = () => {
  const [totalSum, setTotalSum] = useState(0);
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const [controlComponentsData, seControlComponentsData] = useState<ControlComponentsData>({
    filterData: { store: { id: 0, name: '' } }
  });

  const handleOnStoreChange = (data: StoreData) => {
    seControlComponentsData({
      filterData: data
    });
  };

  const getSalesData = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/sales/by-gender',
      params: {
        storeId: controlComponentsData.filterData.store?.id
      }
    };

    makeRequest(config)
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);

        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }, [controlComponentsData]);

  useEffect(() => {
    getSalesData();
  }, [getSalesData]);

  return (
    <>
      <div className="filter-store-container">
        <Filter onFilterChange={handleOnStoreChange} />
      </div>
      <div className="sales-by-gender-main-container base-card">
        <div className="sales-by-gender-quantity">
          <h2 className="sales-by-gender-quantity-title">{formatPrice(totalSum)}</h2>
          <span className="sales-by-gender-quantity-label">Total de vendas</span>
        </div>
        <div className="pie-chart-container">
          <PieChart labels={salesByGender?.labels} series={salesByGender?.series} />
        </div>
      </div>
    </>
  );
};

export default SalesByGender;
