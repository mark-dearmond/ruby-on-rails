import React, { useState, useEffect } from 'react';
import './Products.css';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import Moment from 'react-moment';
import TitleCase from 'react-title-case';

function Product(props) {

  const [properties, setProperties] = useState([])

  useEffect(() => {
    axios.get(`/api/v1/product_properties?search=${props.productId}`)
    .then(res => {
      const arr = res.data.map(property => {
        return {id: property.property.id, name: property.property.name, value: property.value}
      })
      setProperties(arr)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <TitleCase string={props.attributes.name} />
        </Card.Title>
        <strong>UPC</strong>
        <p>{props.attributes.upc}</p>
        <strong>Available On</strong>
        <p>
          <Moment format="MM/DD/YYYY">{props.attributes.available_on}</Moment>
        </p>
        <Card.Title>Properties</Card.Title>
        <Table striped bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {properties.map(property => (
                <tr key={property.id}>
                  <td><TitleCase string={property.name}/></td>
                  <td><TitleCase string={property.value} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
      </Card.Body>
    </Card>
  );
}

export default Product;
