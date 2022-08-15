import { Gender } from 'types/types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const formatGenderPTBR = (gender: Gender) => {
  const genderType = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outro'
  };

  return genderType[gender];
};
