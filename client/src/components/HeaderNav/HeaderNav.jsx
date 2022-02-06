import React from 'react';
import { Layout, Menu } from 'antd';
import style from './style.module.css';
import { Link } from 'react-router-dom';
const { Header } = Layout;

function HeaderNav() {

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className={style.position_menu}>
        <div>
          <Link to={'/'}>
            <Menu.Item ><span className={style.logo_name}>Соседушка</span></Menu.Item>
          </Link>
        </div>
        <div className={style.menu}>
          <Link to={'/createannouncement'}>
            <Menu.Item >Создать новое объявление</Menu.Item>
          </Link>
          <Link to={'/'}>
            <Menu.Item >Главная</Menu.Item>
          </Link>
          <Link to={'/singin'}>
            <Menu.Item >Войти</Menu.Item>
          </Link>
          <Link to={'/singup'}>
            <Menu.Item >Регистация</Menu.Item>
          </Link>
        </div>
      </Menu>
    </Header>
  )
}

export default HeaderNav;
