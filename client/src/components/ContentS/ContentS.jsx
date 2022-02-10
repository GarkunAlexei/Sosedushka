import React from 'react';
import { Layout } from 'antd';
import style from './style.module.css';
import SingUp from '../SingUp/SingUp';
import SingIn from '../SingIn/SingIn';
import FormAccount from '../FormAccount/FormAccaunt';
import { MainPage } from '../MainPage/MainPage';
import DetailPage from '../DetailPage/DetailPage';
import UserWrapper from '../UserWrapper/UserWrapper';
import { Routes, Route } from 'react-router-dom';
import AuthUser from '../ProtectedAuth/AuthUser';
import ProtectedAuth from '../ProtectedAuth/ProtectedAuth';

import Chat from '../Chat/Chat';

const { Content } = Layout;


function ContentS() {
  
  return (
    <Content style={{ padding: '50px 200px' }}>
      <div className={style.site_layout_content}>

        <Routes>
        <Route path="/" element={
          // <ProtectedAuth>
            <MainPage />
          // </ProtectedAuth>
          } />

          <Route path="/signin" element={
          <AuthUser>
            <SingIn />
          </AuthUser>
          } />

          <Route path="/signup" element={
          <AuthUser>
            <SingUp/>
          </AuthUser>
          } /> 

          <Route path="/account" element={
          <ProtectedAuth>
            <FormAccount />
          </ProtectedAuth>      
          } />

          <Route path="/profile" element={
          <ProtectedAuth>
            <UserWrapper />
          </ProtectedAuth>
          } />

          <Route path="/notice/:id" element={
          <ProtectedAuth>
            <DetailPage />
          </ProtectedAuth>
          } />
          <Route path="/userpage" element={
          <ProtectedAuth>
            <UserWrapper />
          </ProtectedAuth>
          } />

          
          <Route path="/chat" element={<Chat/>}/>

        </Routes>

      </div>
    </Content>
  )
}

export default ContentS;
