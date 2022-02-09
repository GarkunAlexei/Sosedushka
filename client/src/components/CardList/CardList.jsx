import React from 'react';
import { useEffect } from 'react';
import { CardFlat } from '../CardFlat/CardFlat';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAd } from '../../redux/actions/adAC';

export const CardList = () => {

  const allNotes = useSelector(state => state.ad)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAd())
  }, [])

  console.log(allNotes);

  return (
    <>
      {allNotes?.map(el => <CardFlat description={el.description} key={el.id} id={el.id} address={el.address} cost={el.cost} img={el.Photos[0]}/>)}
      {/* <CardFlat/> */}
    </>
  );
};

