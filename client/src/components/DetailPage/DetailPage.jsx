import React from 'react';
import {Row, Col} from 'antd'
import { FlatDetail } from '../FlatDetail/FlatDetail';
import { UserDetail } from '../UserDetail/UserDetail';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneFlatUser } from '../../redux/actions/flatUserAC';

export const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // const {id} = params;
  const userAnketa = useSelector(state => state.flatUser)
  
  useEffect(() => {
    if (userAnketa !== null) {
      dispatch(getOneFlatUser(params.id))
    } else {
      alert('zhopa')
      
    }

  }, [])

  console.log('----------->', userAnketa);
  // console.log('----------->', userAnketa);
  // console.log('----------->', userAnketa.note.Photos[0].photo);
  // console.log('----------->', userAnketa.user);

  return (
    <Row>
      <Col xs={12}>
        <FlatDetail 
        key={userAnketa.note.id} 
        address={userAnketa.note.address} 
        description={userAnketa.note.description}
        cost={userAnketa.note.cost}
        img={userAnketa.note.Photos[0].photo}/>
      </Col>
      <Col xs={12}>
        <UserDetail
          key={userAnketa.user.id}
          phone={userAnketa.user.phone}
          img={userAnketa.user.photo}
          about_me={userAnketa.user.about_me}
        />
        </Col>
    </Row>
  );
};
