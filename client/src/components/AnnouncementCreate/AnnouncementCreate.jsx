import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,

} from 'antd';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import style from './style.module.css'
import YMapComponent from '../YMap/CreatePoint/YMapComponent';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addAd } from '../../redux/actions/adAC';

const { Title } = Typography;

function AnnouncementCreate() {

  const [input, setInput] = useState({ name: '', coords: null, cost: '', description: '', address: '' })

  console.log('...INPUT ====>', {...input});

  const dispatch = useDispatch();

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
    ],
  };

  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addAd(input))
    // setInput({})
  }


  return (
    <>
      <Title level={2} className={style.title}>Подача объявления</Title>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
      >
        <Form.Item label="Название:" onChange={inputHandler}>
          <Input name="name" value={input.name} />
        </Form.Item>
        <Form.Item label="Стоимость проживания:" onChange={inputHandler}>
          <Input name="cost" value={input.cost} />
        </Form.Item>
        <Form.Item label="Адрес (укажите на карте):" onChange={inputHandler}>
          <Input name="address" value={input.address} />
        </Form.Item>
        <Form.Item label="Метро">
          <Select>
            <Select.Option value="demo">м.Ленинский проспект</Select.Option>
            <Select.Option value="demo">м.Комсомольская</Select.Option>
            <Select.Option value="demo">м.Китай-город</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Описание" onChange={inputHandler}>
          <Input.TextArea name="description" value={input.description} />
        </Form.Item>
        <Form.Item label="Фото:">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Местоположение" >
          <YMapComponent setInput={setInput}/>
        </Form.Item>
        <Form.Item label=" ">
          <Button onClick={submitHandler} type="primary">Подать объявление</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AnnouncementCreate;


