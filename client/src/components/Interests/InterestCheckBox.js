import React, { useState } from 'react';
import { Button, Col } from 'antd';
import { delInterest, getChange } from '../../redux/actions/interestAC';
import { useDispatch } from 'react-redux';


export default function InterestCheckBox({id, interest, button, status}) {
  // const [visible, setVisible] = useState(true);

  const dispatch = useDispatch()
  const submitHandler = (id) => {
      dispatch(getChange(id))
    }
    const deleteHandler = (id) => {
      dispatch(delInterest(id))
    }

  return (
  
  <>
  <Col span={12}>
    <Button type={button} block id={id} onClick={() => submitHandler(id)}>{interest}</Button>
  </Col>
  {status &&
  <>
    <Col span={6}></Col>
    <Col span={6}>
      <Button block danger id={id} onClick={() => deleteHandler(id)}>Удалить</Button>
    </Col>
  </>
  }
  </>
  );
}
