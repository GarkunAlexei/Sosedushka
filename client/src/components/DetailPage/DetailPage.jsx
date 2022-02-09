import React, {useState} from 'react';
import { Card } from 'antd';
import { FlatDetail } from '../FlatDetail/FlatDetail';
import { UserDetail } from '../UserDetail/UserDetail';
import Chat from '../Chat/Chat';

const tabList = [
  {
    key: 'flatDetail',
    tab: 'Квартира',
  },
  {
    key: 'userDetail',
    tab: 'Сосед',
  },
  {
    key: 'chat',
    tab: 'Чат',
  },


];

const contentList = {
  flatDetail: <FlatDetail/>,
  userDetail: <UserDetail/>,
  chat: <Chat/>,
};

export const DetailPage = () => {

  const [activeTabKey1, setActiveTabKey1] = useState('profil');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };
  return (
    // <Row>
    //   <Col xs={12}><FlatDetail/></Col>
    //   <Col xs={12}><UserDetail/></Col>
    // </Row>
    <>
    <Card
      style={{ width: '100%' }}
      title="Подробная информация"
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
};
