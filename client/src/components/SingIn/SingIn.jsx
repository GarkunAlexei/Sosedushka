import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/actions/userAC';
import style from './style.module.css';
import GoogleLogin from 'react-google-login';

function SingIn(props) {

  const [inputs, setInputs] = useState({ email: '', password: '' });

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );


  const dispatch = useDispatch();
  const navigate = useNavigate()
  const inputHandler = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signInUser(inputs))
    setInputs({ login: '', email: '' })
    navigate('/')
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  return (
    <div className={style.div_form}>
      <div className={style.div_form_sign}>

        <h1>Вход</h1>

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
            rules={[{
              required: true,
              message: 'Please input your Email!',
            }]}
          >
            <label className={style.label_style}>E-mail</label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={inputHandler}
              value={inputs.email}
              className={style.input}
            />
          </Form.Item>

          <Form.Item
            rules={[{
              required: true,
              message: 'Please input your password!',
            }]}
          >
            <label className={style.label_style}>Пароль:</label>
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
              Войти
            </Button>
          </Form.Item>


          <div className={style.google_login}>
            <GoogleLogin
              className={style.button_google}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            >
            </GoogleLogin>
          </div>

          <p className={style.go_reg}>
            У вас нет аккаунта? <Link to={'/signup'}>Зарегистрируйтесь</Link>
          </p>

        </Form>

      </div>
    </div>
  );
}

export default SingIn;
