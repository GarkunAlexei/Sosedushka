import React from 'react';
import { useEffect } from 'react';
import { CardFlat } from '../CardFlat/CardFlat';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAd } from '../../redux/actions/adAC';
import { List, Avatar, Button, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

export const CardList = () => {
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const allNotes = useSelector(state => state.ad)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllAd())
  }, [])

  // console.log(allNotes);

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6,
        }}
        dataSource={allNotes}
      
        renderItem={item => (
          <List.Item
            key={item.title}
      
            extra={
              <img
                width={272}
                alt="logo"
                src={item['Photos.photo']}
              />
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item['Photos.photo']} />}
              title={item.address}
              // description={item.description}
            />
            {item.description}
            <br/>
            <br/>
            <Button onClick={() => {navigate(`/notice/${item.id}`)}}>Подробнее</Button>
          </List.Item>
        )}
      />

      {/* {allNotes?.map(el => <CardFlat description={el.description} key={el.id} id={el.id} address={el.address} cost={el.cost} img={el['Photos.photo']}/>)} */}
      {/* <CardFlat/> */}
    </>
  );
};

