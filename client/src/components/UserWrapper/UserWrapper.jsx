import React, {useState} from 'react';
import { Card } from 'antd';

const tabList = [
  {
    key: 'profil',
    tab: 'Профиль',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList = {
  profil: <p>Профиль</p>,
  tab2: <p>Мои обьявления</p>,
};




function UserWrapper(props) {

  const [activeTabKey1, setActiveTabKey1] = useState('tab1');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };


  return (
    <>
      <Card
        style={{ width: '100%' }}
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
