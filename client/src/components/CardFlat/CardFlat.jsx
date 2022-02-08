import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import style from './style.module.css'
import { Descriptions } from 'antd';
import { Image } from 'antd';
import { blue } from '@ant-design/colors';
import { Link } from 'react-router-dom';



export const CardFlat = ({id, address, cost, img}) => {



  return (
    <div className={style.flat_card}>
      <Card>
        <Row>
          <Col span={17}>
            <div>
              <Descriptions title="Новые квартиры">
                {/* <Descriptions.Item label="Адрес:">Тут будет адрес</Descriptions.Item>
                <Descriptions.Item label="Метро:">м. Ленинский проспект</Descriptions.Item> */}
                <Descriptions.Item label="Район">{address}</Descriptions.Item>
                <Descriptions.Item label="Строимость:">{cost}</Descriptions.Item>
                {/* <Descriptions.Item label="Строимость:">6000 руб.</Descriptions.Item> */}
              </Descriptions>
            </div>
            <Link to={`notice/${id}`}>
            <Button color={blue[3]} type="primary">Подробнее</Button>
            </Link>
          </Col>

          <Col span={5}>
            <Image
              width={250}
              src={img?.photo}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
