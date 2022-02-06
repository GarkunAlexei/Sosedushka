import React, { useState } from 'react';
import { Form, Input, Button,  } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/userAC';


function SingUp(props) {
  const [inputs, setInputs] = useState({login:'', email:'', password:'', role_id:2});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getUser(inputs))
    setInputs({login:'', email:'', password:'', role_id:2})
    navigate('/profile')
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
<Form style={{minWidth:'400px'}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="login"
        rules={[
          {
            required: true,
            message: 'Please input your Login!',
          },
        ]}
      >
        <Input 
        type="text"
        id="login"
        name="login"
        onChange={inputHandler}
        value={inputs.login}
        />
      </Form.Item>
      <Form.Item
        label="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input 
        type='email'
        id="email"
        name="email"
        onChange={inputHandler}
        value={inputs.email}
        />
      </Form.Item>

      <Form.Item
        label="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password 
          id="password"
        name="password"
        type='password'
        onChange={inputHandler}
        value={inputs.password}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={submitHandler} type="primary" htmlType="submit">
          Зарегестрироваться
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SingUp;
