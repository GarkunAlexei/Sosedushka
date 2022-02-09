import { Input, Space } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFindAd } from '../../redux/actions/adAC';
import style from './style.module.css'

export const FindInput = () => {
  const dispatch = useDispatch();
  const { Search } = Input;

  const onSearch = value => {
    if (input) {
      console.log(input);
      dispatch(getFindAd(input))
    }
  };
  const [input, setInput] = useState('');

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  // useEffect(() => {
  //   if (input) {
  //     dispatch(getFindAd(input))
  //   }
  // }, [input])

  return (
    <div className={style.find_input}>
      <Space>
        <Search
          placeholder="Поиск по адресу"
          allowClear
          enterButton="Поиск"
          size="large"
          value={input}
          onChange={changeHandler}
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};

