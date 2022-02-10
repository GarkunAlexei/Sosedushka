import React, { useState } from 'react';
import { Card } from 'antd'
import { FlatDetail } from '../FlatDetail/FlatDetail';
import { UserDetail } from '../UserDetail/UserDetail';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOneFlatUser, nullFlatUser } from '../../redux/actions/flatUserAC';
import { getForm, nullSetForm } from '../../redux/actions/formAC';
import Chat from '../Chat/Chat';

const tabList = [
  {
    key: 'Announcement',
    tab: 'Обьявление',
  },
  {
    key: 'Neighbor',
    tab: 'Сосед',
  },
  {
    key: 'Chat',
    tab: 'Чат',
  },
];

const contentList = {
  Announcement: <FlatDetail/>,
  Neighbor: <UserDetail/>,
  Chat: <Chat/>,
};

function DetailPage(props) {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getOneFlatUser(params.id))
      dispatch(getForm())
      return () => {
        dispatch(nullFlatUser());
        dispatch(nullSetForm())
      }
  }, [])

  const [activeTabKey1, setActiveTabKey1] = useState('Announcement');

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
};

export default DetailPage;
