import React, { useState } from 'react';
import { Checkbox, Col } from 'antd';
import { getChange } from '../../redux/actions/interestAC';
import { useDispatch } from 'react-redux';


export default function InterestCheckBox({id, interest}) {
  // const [checked, setChecked] = useState(false);
  // console.log(checked);
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch()
  const submitHandler = (id) => {
      dispatch(getChange(id))
      setVisible(!visible)
    }

  return (
  
  <>
  { visible && 
    <Col span={6}>
      <Checkbox id={id} onChange={() => submitHandler(id)}>{interest}</Checkbox>
    </Col>
  }
  </>
  );
}
