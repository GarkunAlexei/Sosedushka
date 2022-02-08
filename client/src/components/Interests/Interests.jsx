import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterest } from '../../redux/actions/interestAC';
import InterestCheckBox from './InterestCheckBox';
import { Row, Col } from 'antd';


function Interests(props) {
  const interest = useSelector(state => state.interest)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getInterest())
  }, [])

  return (
    <>
      <b>Добавьте интересы</b>
      
        <Row>
          <Col span={12}>
            <Row>
              {interest.map(el => <InterestCheckBox key={el.id} interest={el.interest} id={el.id} />)}
            </Row>
          </Col>
        </Row>
      
    </>
  );
}

export default Interests;
