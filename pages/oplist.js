import Layout from '../components/Layout';
import React from 'react';
import { mapKeys } from 'lodash';
import { Row, Col, Container } from 'reactstrap';
import Operator from '../components/operator/OperatorGalleryItem';
import Link from 'next/link';
import axios from 'axios';

const OperatorList = function(props) {
  const operators = props.operators;

  const renderList = () => {
    return Object.keys(operators).map((key, val) => {
      return <Operator operator={operators[key]} operator_key={key} />;
    });
  };

  return (
    <Layout>
      <h1 className={'text-center'}>Arknights Operator List</h1>
      <Container>
        <Row className={'ml-4 mr-4 mt-3 mb-3'}>
          <div className={'m-auto'}>{renderList()}</div>
        </Row>
      </Container>
    </Layout>
  );
};

OperatorList.getInitialProps = async function() {
  const res = await axios.get('http://localhost:3000/api/chara');
  const data = res.data;

  return {
    operators: data
  };
};

export default OperatorList;
