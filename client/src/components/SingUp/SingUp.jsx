import React, { useState } from 'react';
import { Form, Input, Button, } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/userAC';
import style from './style.module.css';


function SingUp(props) {

  const [inputs, setInputs] = useState({ login: '', email: '', password: '', role_id: 2 });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getUser(inputs))
    setInputs({ login: '', email: '', password: '', role_id: 2 })
    navigate('/profile')
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <div className={style.div_form}>

      <div className={style.div_form_sign}>

        <h1>Регистрация</h1>

        <i className={`fa-solid fa-users ${style.icon_sign}`}></i>

        <Form
          className={style.signin_form}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your Login!',
              },
            ]}
          >
            <label className={style.label_style}>Логин</label>
            <Input
              type="text"
              id="login"
              name="login"
              onChange={inputHandler}
              value={inputs.login}
              className={style.input}
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <label className={style.label_style}>E-mail</label>
            <Input
              type='email'
              id="email"
              name="email"
              onChange={inputHandler}
              value={inputs.email}
              className={style.input}
            />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <label className={style.label_style}>Пароль</label>
            <Input.Password
              id="password"
              name="password"
              type='password'
              onChange={inputHandler}
              value={inputs.password}
              className={style.input}
            />
          </Form.Item>

          <Form.Item className={style.button_center}>
            <Button className={style.button_submit} onClick={submitHandler} type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>

          <p className={style.go_reg}>
            У вас уже есть аккаунт? <Link to={'/signin'}>Войти</Link>
          </p>
        </Form>

      </div>

    </div>

  );
}

export default SingUp;
