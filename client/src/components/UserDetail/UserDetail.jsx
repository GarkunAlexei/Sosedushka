import React from 'react';
import {Card, Row, Button, Col } from 'antd'
import { useSelector } from 'react-redux';

export const UserDetail = () => {
  const userAnketa = useSelector(state => state.flatUser)


  return (
    <Row>
      {userAnketa &&
        <>
        <Col span={12}>
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={userAnketa.user.photo} />}
        >
        </Card>
        </Col>
        <Col span={12}>
        <h3>{userAnketa.user.name}</h3>
          <h4>Пол: {userAnketa.user.gender}</h4>
          <h4>О себе:</h4>
          <p>{userAnketa.user.about_me}</p>
          <h4>Контакты: {userAnketa.user.phone}</h4>
          <h4>Бюджет: {userAnketa.user.budget} р </h4>
          <br></br> 
          <br></br>
            <h4>Мои интересы:</h4>
            <p>{userAnketa.interests.map(el => <Button>{el.interest}</Button>)}</p>
        </Col>
        {/* <div>
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
        </div> */}
        </>
      }
    </Row>
  );
};
