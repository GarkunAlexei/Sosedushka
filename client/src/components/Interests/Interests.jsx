import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterest } from '../../redux/actions/interestAC';
import InterestCheckBox from './InterestCheckBox';
import { Row } from 'antd';


function Interests(props) {
  const interest = useSelector(state => state.interest)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getInterest())
  }, [])

  return (
    <>
      <b>Выберите свои интересы</b>
      
        <Row>
          {interest.map(el => <InterestCheckBox key={el.id} interest={el.interest} id={el.id} />)}
        </Row>
      
    </>
  );
}

export default Interests;
