import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css'
import { Routes } from 'react-router-dom';
const { Content } = Layout;

function ContentS() {
  return (
    <Content style={{ padding: '0 400px' }}>
      <div className={style.site_layout_content}>
      <Routes>
        {/* <Route path="/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
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
