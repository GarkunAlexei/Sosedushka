import { Input, Select, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFindAd, sortAdByIncCost, sortAdByDescCost, getSortAdByInc, getSortAdByDesc } from '../../redux/actions/adAC';
import style from './style.module.css'

const { Option } = Select;

export const FindInput = () => {
  const dispatch = useDispatch();
  // const notices = useSelector(state => state.ad)
  const [input, setInput] = useState('');

  const { Search } = Input;
  const onSearch = value => {
    if (input) {
      console.log(input);
      dispatch(getFindAd(input))
    }
  };

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  
  // console.log('---------->', notices);

  function handleChange(obj) {
    if (obj.value === 'cheap') {
      dispatch(getSortAdByInc());
    } else {
      dispatch(getSortAdByDesc());
    }
  }

  return (
    <div className={style.find_input}>
      <Space>
        <Search
          placeholder="Введите адрес или стоимость аренды"
          allowClear
          enterButton="Поиск"
          size="large"
          value={input}
          onChange={changeHandler}
          onSearch={onSearch}
          style={{ width: 420 }}
        />
      </Space>

      <Select
    labelInValue
    defaultValue={{ value: 'sort' }}
    style={{ width: 200 }}
    onChange={handleChange}
  >
    <Option disabled value="sort">Сортировать по цене</Option>
    <Option value="cheap">Дешевые</Option>
    <Option value="exp">Дорогие</Option>
  </Select>
    </div>
  );
};

