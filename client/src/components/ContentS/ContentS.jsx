import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css'
import { Route, Routes } from 'react-router-dom';
import AnnouncementCreate from '../AnnouncementCreate/AnnouncementCreate';
const { Content } = Layout;

function ContentS() {
  return (
    <Content style={{ padding: '0 400px' }}>
      <div className={style.site_layout_content}>
      <Routes>
        <Route path="/createannouncement" element={<AnnouncementCreate />} />
        {/* <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} /> */}
      </Routes>
      </div>
    </Content>
  )
}

export default ContentS;
