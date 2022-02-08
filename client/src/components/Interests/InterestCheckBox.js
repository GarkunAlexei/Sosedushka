import React, { useState } from 'react';
import { Checkbox, Col } from 'antd';
import { getChange } from '../../redux/actions/interestAC';
import { useDispatch } from 'react-redux';


export default function InterestCheckBox({id, interest}) {
  // const [visible, setVisible] = useState(true);

  const dispatch = useDispatch()
  const submitHandler = (id) => {
      dispatch(getChange(id))
      // setVisible(!visible)
    }

  return (
  
  <>
  <Col span={12}>
    <Checkbox id={id} onChange={() => submitHandler(id)}>{interest}</Checkbox>
  </Col>
  {/* { visible && 
    <Col span={6}>
      <Checkbox id={id} onChange={() => submitHandler(id)}>{interest}</Checkbox>
    </Col>
  } */}
  </>
  );
}
