import React, { useState, useEffect } from 'react';
import './Products.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import Product from './Product';
import Search from './Search';

function Products() {

  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    axios.get('/api/v1/products')
    .then(res => {
      setProducts(res.data);
    })
    .catch(err => console.log(err))
  }, [])

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    if(query !== '') {
      axios.get(`/api/v1/products?search=${query.toLowerCase()}`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err))
    } else {
      axios.get('/api/v1/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err))
    }
  }

  const handleChange = e => {
    setQuery(e);
  }

  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h2>Products</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Search handleSubmit={handleSubmit} handleChange={handleChange}></Search>
        </Col>
      </Row>
      <Row>
        {products.map(product => (
          <Col xs md="4" className="mb-4" key={product.id}>
            <Product productId={product.id} attributes={product}></Product>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
