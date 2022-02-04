import React from 'react';
import { Card } from 'antd';
import style from './style.module.css'
export const CardFlat = () => {
  
  const { Meta } = Card;

  return (
    <div className={style.flat_card}>
    <Card title="Квартира в купчино" extra={<a href="/extra">Подробнее</a>} style={{ width: 400 }} cover={<img alt="example" src="https://icdn.lenta.ru/images/2019/09/26/12/20190926120600078/square_1280_4a07dfc89ec7360add1e721492720413.jpg" />}>
    
        <div>
          <p>Метро:</p>
        <p>Улица:</p>
        <p>Район:</p>
        <p>Стоимость:</p>
      </div>
    </Card>
    </div>
  );
};
