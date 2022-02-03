import React from 'react';
import { Layout, Menu } from 'antd';
import style from './style.module.css';
const { Header } = Layout;

function HeaderNav() {

  return (
    <Header>
      <div className={style.logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className={style.position_menu}>
        <Menu.Item >Main</Menu.Item>
        <Menu.Item >Sign in</Menu.Item>
        <Menu.Item >Sign up</Menu.Item>
      </Menu>
    </Header>
  )
}

export default HeaderNav;
