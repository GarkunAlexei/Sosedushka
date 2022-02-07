import React from 'react';
import { Layout, Menu, Button } from 'antd';
import style from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions/userAC';
const { Header } = Layout;

function HeaderNav() {
  const user = useSelector(state => state.user)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(userLogout())
    navigate('/')
  };

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className={style.position_menu}>
        <div>
          <Link to={'/'}>
            <Menu.Item ><span className={style.logo_name}>Соседушка</span></Menu.Item>
          </Link>
        </div>
        <div className={style.menu}>
          {user
            ?
            <>
              <Link to={'/profile'}>
                <Menu.Item >Личный кабинет</Menu.Item>
              </Link>
              <Link to={'/'}>
                <Menu.Item >Главная</Menu.Item>
              </Link>
              <Menu.Item >
                <Button type="primary" danger ghost onClick={logoutHandler} >Выйти</Button>
              </Menu.Item>
            </>
            :
            <>
              <Link to={'/singin'}>
                <Menu.Item >Войти</Menu.Item>
              </Link>
              <Link to={'/singup'}>
                <Menu.Item >Регистация</Menu.Item>
              </Link>
            </>
          }
        </div>
      </Menu>
    </Header>
  )
}

export default HeaderNav;
