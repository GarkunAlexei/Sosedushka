import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css'
import { Routes, Route } from 'react-router-dom';
import SingUp from '../SingUp/SingUp';
import SingIn from '../SingIn/SingIn';
import FormAccount from '../FormAccount/FormAccaunt';
const { Content } = Layout;

function ContentS() {
  return (
    <Content style={{ padding: '0 400px' }}>
      <div className={style.site_layout_content}>
      <Routes>
        {/* <Route path="/" element={<MainPage />} />
      <Route path="/" element={<MainPage />} /> */}
      <Route path="/" element={<Content />} />
      <Route path="/account" element={<FormAccount />} />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/singup" element={<SingUp  />} />
      </Routes>
      </div>
    </Content>
  )
}

export default ContentS;
