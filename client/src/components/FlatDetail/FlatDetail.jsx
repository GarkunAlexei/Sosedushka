import React from 'react';
import { Image, Typography, Space, Row, Button } from 'antd'
import { useSelector } from 'react-redux';
import CarouselElement from '../Carousel/Carousel';
import style from './style.module.css'
import YMapComponentShow from '../YMap Show/YMapComponentShow';

export const FlatDetail = () => {

  const { Title, Text } = Typography;
  
  const userAnketa = useSelector(state => state.flatUser)

  const coordsType = userAnketa?.note.coords;

  console.log(userAnketa);

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      {userAnketa &&
        <>
          <div className={style.wrapper}>

            <div className={style.carousel}>

              <CarouselElement />

            </div>

            <div className={style.anketa}>

              <div><Title level={3}>{userAnketa.note.address}</Title></div>

              <div>
                <Space direction="vertical">
                  <Title level={5}>
                    Описание квартиры:
                  </Title>
                  <Text>
                    {userAnketa.note.description}
                  </Text>
                  <Title level={5}>
                    Стоимость: {userAnketa.note.cost}
                  </Title>
                </Space>
              </div>
              <br />
              <div><Button type="danger">Откликнуться</Button></div>

            </div>

          </div>

          <div>
            <YMapComponentShow coordsType={coordsType} address={userAnketa.note.address}/>
          </div>

        </>
      }
    </>
  );
};
