import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChange, getInterest } from '../../redux/actions/interestAC';
import InterestCheckBox from './InterestCheckBox';
import { Row, Col } from 'antd';
import { getForm, nullSetForm } from '../../redux/actions/formAC';


function Interests(props) {
  const dispatch = useDispatch()
  const interest = useSelector(state => state.interest)
  const user = useSelector(state => state.form)
  useEffect(() => {
    dispatch(getInterest());
    dispatch(getForm())
    return () => {
      dispatch(nullSetForm())
    }
  }, [interest.length])
  const yourInterest = user?.Interests
  // console.log(interest);
  // console.log('yourInterest---------->>>>>>', yourInterest);

//  console.log(interest.map(el => console.log(el)));
//  console.log(yourInterest?.map(el => console.log(el)));
//  interest?.map(el => console.log(yourInterest?.includes(el)))

  return (
    <>
      <Row>
        <Col span={12}>
          <b>Добавьте интересы</b>  
        </Col>
        <Col span={12}>
        <b>Ваши интересы</b>
        </Col>
      </Row> 
      
    <Row>        
   
      <Col span={12}>
        <Row>
          {interest.map(el => <InterestCheckBox status={false} button={'dashed'} key={el.id} interest={el.interest} id={el.id} />)}
        </Row>
      </Col>
      <Col span={12}>
        <Row>
          {yourInterest?.map(el => <InterestCheckBox status={true} button={'default'} key={el.id} interest={el.interest} id={el.id} />)}
        </Row>
      </Col>
    </Row>
    </>
  );
}

export default Interests;
