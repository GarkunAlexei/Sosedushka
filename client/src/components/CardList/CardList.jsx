import React from 'react';
import { useEffect } from 'react';
import { CardFlat } from '../CardFlat/CardFlat';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAd } from '../../redux/actions/adAC';

export const CardList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAd())
  }, [])

  const allNotes = useSelector(state => state.ad)

  console.log(allNotes);

  return (
    <>
      {allNotes.map(el => <CardFlat key={el.id} id={el.id} address={el.address} cost={el.cost} img={el.Photos[0]}/>)}
      {/* <CardFlat/> */}
    </>
  );
};

