import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Products(props) {

  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Row className="align-items-center">
        <Col>
          <Form.Label htmlFor="search" srOnly>
            Name
          </Form.Label>
          <Form.Control onChange={e => props.handleChange(e.target.value)} placeholder="Search by product name" id="search"/>
        </Col>
        <Col xs="auto">
          <Button type="submit">
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default Products;
