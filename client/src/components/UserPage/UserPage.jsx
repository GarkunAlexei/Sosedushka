import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Button } from 'antd';
import { getForm, nullForm, nullSetForm } from '../../redux/actions/formAC';
import { useNavigate } from 'react-router-dom';

function UserPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getForm())
    return () => {
      dispatch(nullSetForm())
    }
  }, [])
  const user = useSelector(state => state.form)
  const gender = user.Gender
  const interest = user.Interests

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
          <h4>Пол: {gender?.gender}</h4>
          <h4>О себе:</h4>
          <p>{user.about_me}</p>
          <h4>моб. {user.phone}</h4>
          <h4>Бюджет: {user.budget} р </h4>
          <br></br> 
          <br></br>
            <h4>Мои интересы:</h4>
            <p>{interest?.map(el => <Button onClick={() => {navigate('/interest')}}>{el.interest}</Button>)}</p>
        </Col>
    </Row>
  );
}

export default UserPage;
