import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Image } from 'antd'
// import style from './style.module.css'


export default function CarouselElement() {
  const userAnketa = useSelector(state => state.flatUser);
  const arrWithImg = [];
  userAnketa.note.Photos[0].photo.map(el => arrWithImg.push(el))
  console.log('arrWithImg------->>>>>>', arrWithImg);
  return (
    <>
      <Carousel fade>
        {arrWithImg?.map(el => 
          <Carousel.Item>
            <Image
              width={800}
              className="d-block w-100"
              src={el}
              alt="First slide"
            />
          </Carousel.Item>
        )}
      </Carousel>
 </>
  )
}
