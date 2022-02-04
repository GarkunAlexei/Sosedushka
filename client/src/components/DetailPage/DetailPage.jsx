import React from 'react';
import {Row, Col} from 'antd'
import { FlatDetail } from '../FlatDetail/FlatDetail';
import { UserDetail } from '../UserDetail/UserDetail';

export const DetailPage = () => {
  return (
    <Row>
      <Col xs={12}><FlatDetail/></Col>
      <Col xs={12}><UserDetail/></Col>
    </Row>
  );
};
