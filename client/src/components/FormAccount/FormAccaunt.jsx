import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  InputNumber,
  Switch,
  Checkbox, Row, Col
} from 'antd';

function FormAccount(props) {
  const { TextArea } = Input;


  return (
    <Form
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 14,
    }}
    layout="horizontal"
  

  >
    <h2>Заполни анкету</h2>
    <Form.Item label="ФИО">
      <Input />
    </Form.Item>
    <Form.Item label="Телефон">
      <Input type="tel" defaultValue="+7 " />
    </Form.Item>
    <Form.Item label="Telegram">
      <Input type="text" defaultValue="@" />
    </Form.Item>
    <Form.Item label="instagram">
      <Input type="text" defaultValue="@" />
    </Form.Item>
    <Form.Item label="Выбери пол">
      <Select>
        <Select.Option value="male">male</Select.Option>
        <Select.Option value="female">female</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label="Фото">
      <Input type="url"/>
  
    </Form.Item>
    <Form.Item label="О себе">
    <TextArea showCount maxLength={255} />
    </Form.Item>
    <Form.Item label="Дата Рождения">
      <DatePicker />
    </Form.Item>
    <Form.Item label="Стоймость">
      <InputNumber /> ₽
    </Form.Item>
 
    <Form.Item label="Интересы">
    <Checkbox.Group style={{ width: '100%' }} >
    <Row>
      <Col span={6}>
        <Checkbox value="A">кино</Checkbox>
      </Col>
      <Col span={6}>
        <Checkbox value="B">вино</Checkbox>
      </Col>
      <Col span={6}>
        <Checkbox value="C">домино</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
    </Form.Item>
    <Form.Item >
      <Button>Сохранить</Button>
    </Form.Item>
  </Form>
  );
}

export default FormAccount;
