import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import style from './style.module.css'
import { Descriptions } from 'antd';
import { Image } from 'antd';
import { blue } from '@ant-design/colors';
import { Link } from 'react-router-dom';


export const CardFlat = () => {

  console.log(blue);

  return (
    <div className={style.flat_card}>
      <Card>
        <Row>
          <Col span={17}>
            <div>
              <Descriptions title="Квартира в купчино">
                <Descriptions.Item label="Адрес:">Тут будет адрес</Descriptions.Item>
                <Descriptions.Item label="Метро:">м. Ленинский проспект</Descriptions.Item>
                <Descriptions.Item label="Район">Хорошевский</Descriptions.Item>
                <Descriptions.Item label="Строимость:">6000 руб.</Descriptions.Item>
                <Descriptions.Item label="Строимость:">6000 руб.</Descriptions.Item>
              </Descriptions>
            </div>
            <Link to={'/extra'}>
            <Button color={blue[3]} type="primary">Подробнее</Button>
            </Link>
          </Col>

          <Col span={5}>
            <Image
              width={250}
              src="https://icdn.lenta.ru/images/2019/09/26/12/20190926120600078/square_1280_4a07dfc89ec7360add1e721492720413.jpg"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
