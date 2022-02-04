import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css'
import SingUp from '../SingUp/SingUp';
import SingIn from '../SingIn/SingIn';
import FormAccount from '../FormAccount/FormAccaunt';
import AnnouncementCreate from '../AnnouncementCreate/AnnouncementCreate';
import { MainPage } from '../MainPage/MainPage';
import UserWrapper from '../UserWrapper/UserWrapper';
import {Routes, Route} from 'react-router-dom'
const { Content } = Layout;

function ContentS() {
  return (
    <Content style={{ padding: '0 300px' }}>
      <div className={style.site_layout_content}>
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<FormAccount />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp  />} />
        <Route path="/createannouncement" element={<AnnouncementCreate />} />
        <Route path="/userpage" element={<UserWrapper />} />

      </Routes>
      </div>
    </Content>
  )
}

export default ContentS;
