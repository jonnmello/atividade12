export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  id: number;
  name: string;
};

export type SalesByGenderType = {
  gender: Gender;
  sum: number;
};

export type PieChartConfig = {
  labels?: string[];
  series?: number[];
};
