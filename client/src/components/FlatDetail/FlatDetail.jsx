import React from 'react';
import { Image, Typography, Space, Row, Button } from 'antd'
import { useSelector } from 'react-redux';

export const FlatDetail = () => {
  const{Title, Text} = Typography;
  const userAnketa = useSelector(state => state.flatUser)

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Row>
      {userAnketa &&
        <>
        <Title level={3}>{userAnketa.note.address}</Title>
      
          <Image
            width={600}
            src={userAnketa.note.Photos[0].photo}
          />
        <div>
        <Space direction="vertical">
        <Title level={5}>
          Описание квартиры
        </Title>
          <Text>
            {userAnketa.note.description}
        </Text>
        <Title level={5}>
          Строимость
        </Title>
          <Text>
          {userAnketa.note.cost}
        </Text>
        </Space>
        <Button type="danger">Откликнуться</Button>
        </div>
        </>
      }
    </Row>
  );
};
