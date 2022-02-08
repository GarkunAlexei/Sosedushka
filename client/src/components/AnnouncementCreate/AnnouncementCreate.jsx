import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Typography, Progress, Modal } from 'antd';
import style from './style.module.css'
import YMapComponent from '../YMap/CreatePoint/YMapComponent';
import { useDispatch } from 'react-redux';
import { addAd } from '../../redux/actions/adAC';
import { storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';

const { Title } = Typography;

function AnnouncementCreate() {

  const [progress, setProgress] = useState();
  const [image, setImage] = useState(null)
  const [input, setInput] = useState({ name: '', coords: null, cost: '', description: '', address: '', img: '' })

  console.log('...INPUT ====>', { ...input });
  console.log('IMAGE ====>', image)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleChange = (e) => {
    console.log('TARGET ====>', e.target.files);
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // const file = e.target[0].files[0]
    // console.log(file);
    // uploadFiles(file)
    dispatch(addAd(input))
    // setInput({})
  }

  const uploadFiles = () => {

    console.log('uploadFiles');
    const storageRef = ref(storage, `/files/${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on('state_changed', (snaphot) => {
      const prog = Math.round((snaphot.bytesTransferred / snaphot.totalBytes) * 100);
      setProgress(prog);
    }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => setInput(prev => ({ ...prev, img: url })))
      }
    )

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
        <Form.Item label="Описание" onChange={inputHandler}>
          <Input.TextArea name="description" value={input.description} />
        </Form.Item>
        <Form.Item label="Фото:">


          <Button type="primary" onClick={showModal}>
            Загрузить фото
          </Button> <span></span>

          <Modal title="Загрузка фото" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            {/* <Upload type="file" name="img" onChange={handleChange}>
              <Button>Выберите файлы</Button>
            </Upload> */}
            <input type="file" name="img" onChange={handleChange} /> <br />
            <Button icon={<UploadOutlined />} type='submit' onClick={uploadFiles}>Загрузить</Button>
            <Progress percent={progress} size="small" /> {progress} %
          </Modal>
          { progress ? 
              <Progress percent={progress} steps={1} size="small" strokeColor="#52c41a" />:
              <p></p>
          }
        </Form.Item>
        <Form.Item label="Местоположение" >
          <YMapComponent setInput={setInput} />
        </Form.Item>
        <Form.Item label={' '}>
          <Button type="primary" onClick={submitHandler}>Подать объявление</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AnnouncementCreate;


