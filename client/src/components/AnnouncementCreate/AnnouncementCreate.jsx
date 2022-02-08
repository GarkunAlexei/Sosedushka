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
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';

const { Title } = Typography;

function AnnouncementCreate() {

  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([])
  const [urlsAll, setUrlsAll] = useState([])
  const [input, setInput] = useState({ name: '', coords: null, cost: '', description: '', address: '', img: [null] })

  console.log('...INPUT ====>', { ...input });
  console.log('URLS ======>', urlsAll)

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
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random()
      setImages(prev => [...prev, newImage])
    }
  }


  const uploadFiles = () => {

    console.log('uploadFiles');

    const promises = []

    images.map((image) => {

      const storageRef = ref(storage, `/files/${image.name}`)
      const uploadTask = uploadBytesResumable(storageRef, image)
      // const uploadTask = storage.ref(`/files/${image.name}`).put(image);

      promises.push(uploadTask)

      uploadTask.on('state_changed', (snaphot) => {

        const prog = Math.round(
          (snaphot.bytesTransferred / snaphot.totalBytes) * 100
        );
        setProgress(prog);
      },
        (err) => {
          console.log(err);
        },
        // async () => {
        //   await storage
        //   .ref('images')
        //   .child(image.name)
        //   // .getDownloadURL(uploadTask.snapshot.ref)
        //   .getDownloadURL()
        //   .then((urls) => {
        //     // setInput(prev => ({ ...prev, img: urls }))
        //     console.log(urls)
        //   });
        // }
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref)
            .then((urls) => {
              // setInput(prev => ({ ...prev, img: urls }))
              console.log(urls)
              setUrlsAll(prev => [...prev, urls])
              // setInput(prev => ({ ...prev, img: urlsAll }))
              console.log(urlsAll)
            });
        }

      )

    });

    Promise.all(promises)
      .then((data) => {
        console.log('THEN ФОТО ЗАГРУЗИЛИСЬ');
        // console.log("PROMISE ===>", urlsAll)
        // console.log("INPUT ПЕРЕД BACK====>", input)
        setInput(prev => ({ ...prev, img: [...data] }))
        // console.log("INPUT TO BACK====>", input)
        console.log(data);
      })
      .catch((err) => console.log(err))
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    // const file = e.target[0].files[0]
    // console.log(file);
    // uploadFiles(file)

    // setInput(prev => ({ ...prev, img: [...urlsAll] }))

    dispatch(addAd(input))
    // setInput({ name: '', coords: null, cost: '', description: '', address: '', img: null })
  }
  
  console.log('INPUT AFTER DOWNLOAD', input);

  return (
    <>
      <Title level={2} className={style.title}>Подача объявления</Title>
      <Form labelCol={{ span: 6}}
        wrapperCol={{ span: 12}}
        layout="horizontal"
      >
        <Form.Item label="Заголовок" onChange={inputHandler}>
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
            <input type="file" multiple name="img" onChange={handleChange} /> <br />
            <Button icon={<UploadOutlined />} type='submit' onClick={uploadFiles}>Загрузить</Button>
            <Progress percent={progress} size="small" /> {progress} %
          </Modal>
          {progress ?
            <Progress percent={progress} steps={1} size="small" strokeColor="#52c41a" /> :
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


