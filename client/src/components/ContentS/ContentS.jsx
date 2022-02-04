import React, { useEffect } from 'react';
import { Layout } from 'antd';
import style from './style.module.css'
import SingUp from '../SingUp/SingUp';
import SingIn from '../SingIn/SingIn';
import FormAccount from '../FormAccount/FormAccaunt';
import AnnouncementCreate from '../AnnouncementCreate/AnnouncementCreate';
import { MainPage } from '../MainPage/MainPage';
import { DetailPage } from '../DetailPage/DetailPage';
import UserWrapper from '../UserWrapper/UserWrapper';
import { Routes, Route } from 'react-router-dom';
import AuthUser from '../ProtectedAuth/AuthUser';
import ProtectedAuth from '../ProtectedAuth/ProtectedAuth';
import UserPage from '../UserPage/UserPage';

const { Content } = Layout;


function ContentS() {
  
  return (
    <Content style={{ padding: '0 300px' }}>
      <div className={style.site_layout_content}>


       <Routes>
        <Route path="/" element={
          // <ProtectedAuth>
            <MainPage />
          //  </ProtectedAuth>
          } />
          <Route path="/singin" element={
          // <AuthUser>
            <SingIn />
          // </AuthUser>
          } />
          <Route path="/singup" element={
          // <AuthUser>
            <SingUp/>
          // </AuthUser>
          } />
          <Route path="/account" element={
          // <ProtectedAuth>
            <FormAccount />
          // </ProtectedAuth>      
          } />

          <Route path="/profile" element={
          // <ProtectedAuth>
            <UserWrapper />
          // </ProtectedAuth>
          } />
          <Route path="/extra" element={
          // <ProtectedAuth>
            <DetailPage />
          // </ProtectedAuth>
          } />
          <Route path="/userpage" element={
          // <ProtectedAuth>
            <UserWrapper />
            // </ProtectedAuth>
          } />

        </Routes>

      </div>
    </Content>
  )
}

export default ContentS;
