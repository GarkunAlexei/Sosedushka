import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css'
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
const { Content } = Layout;

function ContentS() {
  return (
    <Content style={{ padding: '0 300px' }}>
      <div className={style.site_layout_content}>
      <Routes>
        <Route path="/" element={<MainPage />} />
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
