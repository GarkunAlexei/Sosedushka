import React from 'react'
// import { Carousel } from 'react-bootstrap';
import { Carousel } from 'antd';
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
      {/* <Carousel fade>
        {arrWithImg?.map(el => 
          <Carousel.Item> */}
            <Image
              width={550}
              height={400}
              className="d-block w-100"
              src={arrWithImg[0]}
              alt="First slide"
            />
          {/* </Carousel.Item>
        )}
      </Carousel> */}
    </>
  )

  // function onChange(a, b, c) {
  //   console.log(a, b, c);
  // }

  // const contentStyle = {
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };

  // return (
  //   <Carousel afterChange={onChange}>
  //   <div>
  //     <h3 style={contentStyle}>1</h3>
  //   </div>
  //   <div>
  //     <h3 style={contentStyle}>2</h3>
  //   </div>
  //   <div>
  //     <h3 style={contentStyle}>3</h3>
  //   </div>
  //   <div>
  //     <h3 style={contentStyle}>4</h3>
  //   </div>
  // </Carousel>
  // )
}
