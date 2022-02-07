import React from 'react';
import {Image, Typography, Space} from 'antd'

export const FlatDetail = ({address, description, cost, img}) => {
  const{Title, Text} = Typography;
  return (
    <>
    <Title level={3}>5-комн.квартира, 200,4 м²</Title>
    <Title level={5}>
     {address}
    </Title>
      <Image
        width={200}
        src={img}
      />
    <div>
    <Space direction="vertical">
    <Title level={5}>
      Описание квартиры
    </Title>
      <Text>
           {description}
    </Text>
    <Title level={5}>
      Строимость
    </Title>
      <Text>
           {cost}
    </Text>
    </Space>
    </div>
    </>
  );
};
