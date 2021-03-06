import React, {useState} from 'react';
import { Card } from 'antd';
import UserPage from '../UserPage/UserPage';
import AnnouncementCreate from '../AnnouncementCreate/AnnouncementCreate'
import FormAccount from '../FormAccount/FormAccaunt';
import Interests from '../Interests/Interests';
import Chat from '../Chat/Chat';


const tabList = [
  {
    key: 'profil',
    tab: 'Профиль',
  },
  {
    key: 'profilRedact',
    tab: 'Редактировать профиль',
  },
  {
    key: 'ad',
    tab: 'Объявление',
  },
  {
    key: 'interests',
    tab: 'Мои интересы',
  },
  {
    key: 'chat',
    tab: 'Чат',
  },
];

const contentList = {
  profil: <UserPage/>,
  profilRedact: <FormAccount/>,
  ad: <AnnouncementCreate/>,
  interests: <Interests/>,
  chat: <Chat/>
};


function UserWrapper(props) {

  const [activeTabKey1, setActiveTabKey1] = useState('profilRedact');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };


  return (
    <>
      <Card
        style={{ width: '100%', height: '100vh' }}
        title="Личный кабинет"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      
      </Card>
    </>
  );
}

export default UserWrapper;
