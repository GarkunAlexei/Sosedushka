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
            <h4>{userAnketa.user.name} о своих интересах:</h4>
            <p>{userAnketa.interests.map(el => <Button>{el.interest}</Button>)}</p>
        </Col>
        </>
      }
    </Row>
  );
};
