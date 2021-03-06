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
import { addForm, getForm, nullSetForm } from '../../redux/actions/formAC';
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';


function FormAccountCreate(props) {
  const { TextArea } = Input;
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const [input, setInput] = useState({ name: '', phone: '', gender_id: '', about_me: '', birthday: '', budget: '', photo: null })
  const [image, setImage] = useState(null)

  useEffect(() => {
 
  }, [])


  console.log('input------>', input)

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
    dispatch(addForm(input))
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
      <h2>??????????????</h2>
      <Form.Item for="name" label="??????">
        <Input name="name" onChange={inputHandler} />
      </Form.Item>
      <Form.Item label="??????????????">
        <Input name="phone" type="tel" defaultValue="+7 " onChange={inputHandler} />
      </Form.Item>
      <Form.Item label="???????????? ??????">
        <Select onChange={selectHandler} >
          <Select.Option name="gender_id" value="1">??????????????</Select.Option>
          <Select.Option name="gender_id" value="2">??????????????</Select.Option>
          <Select.Option name="gender_id" value="3">????????????...</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="?? ????????">
        <TextArea showCount maxLength={255} name="about_me" onChange={inputHandler} />
      </Form.Item>
      <Form.Item label="???????? ????????????????">
        <Input type="date" name="birthday" onChange={inputHandler} />
      </Form.Item>
      <Form.Item label="????????????">
        <Input type="number" name="budget" onChange={inputHandler} suffix="???" />
      </Form.Item>
      <Form.Item label="????????:">
        <input type="file" name="photo" onChange={handleChange} />
        <Button icon={<UploadOutlined />} type='submit' onClick={uploadFiles}>??????????????????</Button>
        <Progress percent={progress} size="small" /> {progress} %
      </Form.Item>
      <Form.Item >
        <Button onClick={submitHandler}> ??????????????????</Button>
      </Form.Item>
    </Form>

    
    
  );
}

export default FormAccountCreate;
