import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col } from 'antd';
import { getForm } from '../../redux/actions/formAC';

function UserPage(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getForm())
  }, [])
  const user = useSelector(state => state.form)

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
        <h3>{user.name}</h3>
          <h4>Пол: {user['Gender.gender']}</h4>
          <h4>О себе:</h4>
          <p>{user.about_me}</p>
          <h4>моб. {user.phone}</h4>
          <h4>Бюджет: {user.budget} р </h4>
          <br></br> 
          <br></br>
            <h4>Мои интересы:</h4>
            <p>Кино Вино Домино Мужчины</p>
        </Col>
    </Row>
  );
}

export default UserPage;
