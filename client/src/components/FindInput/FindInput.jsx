import { Input, Space } from 'antd';
import React from 'react';
import style from './style.module.css'

export const FindInput = () => {
  const { Search } = Input;
  const onSearch = value => console.log(value);
  
  return (
    <div className={style.find_input}>
    <Space>
    <Search
      placeholder="Поиск по объявлениям"
      allowClear
      enterButton="Поиск"
      size="large"
      onSearch={onSearch}
    />
  </Space>
    </div>
  );
};


