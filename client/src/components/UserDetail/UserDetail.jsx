import React from 'react';
import {Image, Typography, Space, Button} from 'antd'

export const UserDetail = ({phone, img, about_me, name}) => {
  const{Title, Text} = Typography;
  return (
    <>
    <div>
     <Title level={3}>{name}</Title>
     <Image
        width={200}
        src={img}
      />
    </div>
    <div>
    <Title level={5}>
      О себе
    </Title>
    <Text>
      {about_me}
    </Text>
    <Title level={5}>
      Контакты
    </Title>
    <Text>
      {phone}
    </Text>
      <Button type="danger">Откликнуться</Button>
    </div>
    </>
  );
};
