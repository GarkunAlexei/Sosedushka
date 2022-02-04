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
import { YMaps, Map } from 'react-yandex-maps';



const { Title } = Typography;

function AnnouncementCreate() {

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

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
      {
        uid: '2',
        name: 'ййй.png',
        status: 'done',
        url: 'http://www.baidu.com/iii.png',
      },
    ],
  };


  return (
    <>
      <Title level={2} className={style.title}>Подача объявления</Title>
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Название:">
          <Input />
        </Form.Item>
        <Form.Item label="Стоимость проживания:">
          <Input />
        </Form.Item>
        <Form.Item label="Адрес:">
          <Input />
        </Form.Item>
        <Form.Item label="Метро">
          <Select>
            <Select.Option value="demo">м. Ленинский проспект</Select.Option>
            <Select.Option value="demo">м. Комсомольская</Select.Option>
            <Select.Option value="demo">м. Китай-город</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Описание">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Фото:">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Местоположение">
          <YMaps>
            <div>
              <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} width={450} height={300} />
            </div>
          </YMaps>
        </Form.Item>
        <Form.Item label=" ">
          <Button type="primary">Подать объявление</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AnnouncementCreate;


