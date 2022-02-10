import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Progress, Modal } from 'antd';
import { addForm, changeForm, getForm, nullSetForm } from '../../redux/actions/formAC';
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';


function FormAccountChange(props) {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const form = useSelector(state => state.form)
  console.log('input------>', form)
  const [progress, setProgress] = useState(0);
  const [input, setInput] = useState({ name: '', phone: '', gender_id: '', about_me: '', birthday: '', budget: '' })
  const [image, setImage] = useState(null)

  useEffect(() => {
    dispatch(getForm())
    setInput({ name: form.name, phone: form.phone, gender_id: form.gender_id, about_me: form.about_me, birthday: form.birthday, budget: form.budget, photo: form.photo  })
  }, [])


  

  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const selectHandler = (value) => {
    setInput(prev => ({ ...prev, gender_id: value }))
  }

  const handleChange = (e) => {
    console.log('IMAGE ====>', e.target.files[0]);
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const uploadFiles = () => {

    const storageRef = ref(storage, `/photos/${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on('state_changed', (snaphot) => {

      const prog = Math.round(
        (snaphot.bytesTransferred / snaphot.totalBytes) * 100
      );
      setProgress(prog);
    },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log(url)
            setInput(prev => ({ ...prev, photo: url }))
          });
      }

    )
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(changeForm(input, form.id))
  }

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
      <Form.Item for="name" label="ФИО">
        <Input name="name" value={input.name} onChange={inputHandler}/>
      </Form.Item>
      <Form.Item label="Телефон">
        <Input name="phone" type="tel" defaultValue="+7 " value={input.phone} onChange={inputHandler} />
      </Form.Item>
      <Form.Item label="Выбери пол">
        <Select onChange={selectHandler} value='Мужской'>
          <Select.Option name="gender_id" value="1">Мужской</Select.Option>
          <Select.Option name="gender_id" value="2">Женский</Select.Option>
          <Select.Option name="gender_id" value="3">Другое...</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="О себе">
        <TextArea showCount maxLength={255} name="about_me" value={input.about_me} onChange={inputHandler} />
      </Form.Item>
      <Form.Item label="Дата Рождения">
        <Input type="date" name="birthday" onChange={inputHandler} />
      </Form.Item>
      <Form.Item label="Бюджет">
        <Input type="number" name="budget" value={input.budget} onChange={inputHandler} suffix="₽" />
      </Form.Item>
      <Form.Item label="Фото:">
        <input type="file" name="photo" onChange={handleChange} />
        <Button icon={<UploadOutlined />} type='submit' onClick={uploadFiles}>Загрузить</Button>
        <Progress percent={progress} size="small" /> {progress} %
      </Form.Item>
      <Form.Item >
        <Button onClick={submitHandler}>Редактировать</Button>
      </Form.Item>
    </Form>

    
    
  );
}

export default FormAccountChange;
