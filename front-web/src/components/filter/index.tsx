import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Store } from 'types/types';
import { makeRequest } from 'utils/request';
import './styles.css';

export type StoreData = {
  store: Store;
};

type Props = {
  onFilterChange: (filter: StoreData) => void;
};

const Filter = ({ onFilterChange }: Props) => {
  const [store, setStore] = useState<Store[]>([]);

  const { setValue, getValues, control } = useForm<StoreData>();

  const handleStoreChange = (value: Store) => {
    setValue('store', value);

    const obj: StoreData = {
      store: getValues('store')
    };
    onFilterChange(obj);
  };

  useEffect(() => {
    makeRequest
      .get('/stores')
      .then((response) => {
        setStore(response.data);
      })
      .catch((response) => {
        console.error(`Error: ${response.data}`);
      });
  }, []);

  return (
    <div className="filter-container base-card">
      <Controller
        name="store"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            classNamePrefix="filter-select"
            placeholder="Selecione a cidade"
            isClearable
            options={store}
            onChange={(value) => handleStoreChange(value as Store)}
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
          />
        )}
      />
    </div>
  );
};

export default Filter;
