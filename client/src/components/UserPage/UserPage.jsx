import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Button } from 'antd';
import { getForm, nullForm, nullSetForm } from '../../redux/actions/formAC';

function UserPage(props) {

  const user = useSelector(state => state.form)
  const gender = user.Gender
  const interest = user.Interests

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForm())
    return () => {
      dispatch(nullSetForm())
    }
  }, [])


  return (
    <Row>
      <Col span={12}>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={user.photo} />}
  >
  </Card>
      </Col>
      <Col span={12}>
        <h3>{user.name}</h3>
          <h4>Пол: {gender?.gender}</h4>
          <h4>О себе:</h4>
          <p>{user.about_me}</p>
          <h4>моб. {user.phone}</h4>
          <h4>Бюджет: {user.budget} р </h4>
          <br></br> 
          <br></br>
            <h4>Мои интересы:</h4>
            <p>{interest?.map(el => <Button>{el.interest}</Button>)}</p>
        </Col>
    </Row>
  );
}

export default UserPage;
