import React from 'react';
import { Row, Col, Button } from 'antd'
import { FlatDetail } from '../FlatDetail/FlatDetail';
import { UserDetail } from '../UserDetail/UserDetail';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneFlatUser, nullFlatUser } from '../../redux/actions/flatUserAC';
import { getForm, nullSetForm } from '../../redux/actions/formAC';

export const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // const {id} = params;
  const userAnketa = useSelector(state => state.flatUser)
  
  useEffect(() => {
      dispatch(getOneFlatUser(params.id))
      dispatch(getForm())
      return () => {
        dispatch(nullFlatUser());
        dispatch(nullSetForm())
      }
  }, [])

  console.log(userAnketa?.interests);
  // console.log('----------->', userAnketa);
  // console.log('----------->', userAnketa.note.Photos[0].photo);
  // console.log('----------->', userAnketa.user);

  return (
    <Row>
      {userAnketa &&
      
      <>
      {console.log(userAnketa)}
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
          name={userAnketa.user.name}
        />
        </Col>
        <Col xs={12}>
        </Col>
        <Col xs={12}>
        <h4>{userAnketa.user.name} о своих интересах:</h4>
            <p>{userAnketa.interests.map(el => <Button>{el.interest}</Button>)}</p>
        </Col>
        </>
      }
    </Row>
  );
};
