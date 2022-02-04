import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css'
import { Routes, Route } from 'react-router-dom';
import SingUp from '../SingUp/SingUp';
import SingIn from '../SingIn/SingIn';
import FormAccount from '../FormAccount/FormAccaunt';
import AnnouncementCreate from '../AnnouncementCreate/AnnouncementCreate';
import { MainPage } from '../MainPage/MainPage';
import { DetailPage } from '../DetailPage/DetailPage';
const { Content } = Layout;

function ContentS() {
  return (
    <Content style={{ padding: '0 300px' }}>
      <div className={style.site_layout_content}>
      <Routes>
        <Route path="/account" element={<FormAccount />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp  />} />
        <Route path="/createannouncement" element={<AnnouncementCreate />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/extra" element={<DetailPage />} />
        {/* <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} /> */}
      </Routes>
      </div>
    </Content>
  )
}

export default ContentS;
