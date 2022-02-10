import React from 'react';
import { CardList } from '../CardList/CardList';
import { FindInput } from '../FindInput/FindInput';

export const MainPage = () => {
  return (
    <>
      <div>
        <div>
          <FindInput />
        </div>
        <div>
          <CardList />
        </div>
      </div>
    </>
  );
};

