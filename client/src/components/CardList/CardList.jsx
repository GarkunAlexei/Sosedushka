import React from 'react';
import { useEffect } from 'react';
import { CardFlat } from '../CardFlat/CardFlat';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAd } from '../../redux/actions/adAC';
import { List, Avatar, Button, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { Image } from 'antd';
import style from './style.module.css'

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
  console.log(allNotes[0]);

  useEffect(() => {
    dispatch(getAllAd())
  }, [])

  // console.log(allNotes);

  return (
    <>
      <List

        className={style.list_card}
        itemLayout="horizontal"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 8,
        }}

        grid={{
          gutter: 16,
          column: 2,
          // xs: 1,
          // sm: 2,
          // md: 4,
          // lg: 4,
          // xl: 8,
          // xxl: 3,
        }}

        dataSource={allNotes}

        renderItem={item => (

          <List.Item
            className={style.item_card}
            key={item.title}
          >

            <Avatar size={64} src={item.avatar} className={style.avatar} />

            <div className={style.left_notice}>

              <div className={style.user_info}>
                <p>{`Сосед: ${item.name}`}</p>
              </div>

              <div className={style.description}>
                <p>{`Адрес: ${item.address.slice(8, 40)}...`}</p>
                <p>{`Описание: ${(item.description).slice(0, 75)}...`}</p>
                <p>{item.cost ? `Стоимость: ${item.cost} ₽` : ''}</p>
              </div>

              <div>
                <Button onClick={() => { navigate(`/notice/${item.id}`) }} className={style.button_submit}>Подробнее</Button>
              </div>

            </div>


            <div className={style.image_notice}>
              <Image
                width={180}
                src={item['Photos.photo']}
              />
            </div>


          </List.Item>
        )}


      />

      {/* {allNotes?.map(el => <CardFlat description={el.description} key={el.id} id={el.id} address={el.address} cost={el.cost} img={el['Photos.photo']}/>)} */}
      {/* <CardFlat/> */}
    </>
  );
};

