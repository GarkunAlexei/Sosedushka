import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addForm } from '../../redux/actions/formAC';


function FormAccount(props) {
  const { TextArea } = Input;

  const dispatch = useDispatch()
  //console.log(Input)

  const [input, setInput] = useState({name: '', phone: '',gender_id: '', about_me: '', birthday: '', budget: ''})


  const inputHandler = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const selectHandler = (value) => {
    setInput(prev => ({...prev, gender_id: value}))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addForm(input))
  }
  console.log(input)


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
    <h2>Профиль</h2>
    <Form.Item label="ФИО">
      <Input name="name" onChange={inputHandler}/>
    </Form.Item>
    <Form.Item label="Телефон">
      <Input name="phone" type="tel" defaultValue="+7 " onChange={inputHandler}/>
    </Form.Item>
    <Form.Item label="Выбери пол">
      <Select  onChange={selectHandler}  >
        <Select.Option name="gender_id" value="1">male</Select.Option>
        <Select.Option name="gender_id" value="2">female</Select.Option>
        <Select.Option name="gender_id" value="3">other...</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label="Фото:">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
    <Form.Item label="О себе">
    <TextArea showCount maxLength={255} name="about_me" onChange={inputHandler}/>
    </Form.Item>
    <Form.Item label="Дата Рождения">
      <Input type="date" name="birthday" onChange={inputHandler}/>
    </Form.Item>
    <Form.Item label="Стоймость">
      <Input type="number" name="budget" onChange={inputHandler} suffix="₽"/> 
    </Form.Item>
    <Form.Item >
      <Button onClick={submitHandler}> Сохранить</Button>
    </Form.Item>
  </Form>
  );
}

export default FormAccount;
