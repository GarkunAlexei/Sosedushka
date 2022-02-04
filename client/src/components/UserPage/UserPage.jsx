import React from 'react';
import { Card, Row, Col } from 'antd';

function UserPage(props) {
  return (
    <Row>
      <Col span={12}>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>
      </Col>
      <Col span={12}>
        <h3> Name 27</h3>
          <h4>Пол: муж</h4>
          <h4>О себе:</h4>
          <p>Я молодой модный мужик, хочу жить с таким же мужиком</p>
          <h4>моб. +79261112233</h4>
          <h4>Бюджет: 300 р </h4>
          <br></br> 
          <br></br>
            <h4>Мои интересы:</h4>
            <p>Кино Вино Домино Мужчины</p>
        </Col>
    </Row>
  );
}

export default UserPage;
