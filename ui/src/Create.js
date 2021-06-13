import React, { useState } from 'react';
import './Create.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { NavLink} from 'react-router-dom'

function Create() {
  
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({productProps: [{name: null, value: null}]})

  const setField = (field, value, i) => {
    if(i >= 0) {
      const productProps = [...form.productProps];
      productProps[i][field] = value;
      setForm({...form, productProps})
    } else {
      setForm({...form, [field]: value})
    }
  }

  const handleSubmit = (event) => {
    const formEl = event.currentTarget;
    if (formEl.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      // make call to api
    }
    console.log(form)
    setValidated(true);
  };

  const handleAddProperty = () => {
    const productProps = [...form.productProps, {name: null, value: null}];
    setForm({...form, productProps});
  }

  const removeProp = i => {
    const productProps = [...form.productProps];
    if(i !== 0) productProps.splice(i, 1);
    setForm({...form, productProps});
  }

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Col>
            <h2>Create New Product</h2>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Body>
                  <Card.Title>Product Info</Card.Title>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={ e => setField('name', e.target.value) } required type="text"/>
                    <Form.Control.Feedback type="invalid">
                      Please provide a name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="upc">
                    <Form.Label>UPC</Form.Label>
                    <Form.Control onChange={ e => setField('upc', e.target.value) }  required type="text"/>
                    <Form.Control.Feedback type="invalid">
                      Please provide a UPC
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="date">
                    <Form.Label>Available On</Form.Label>
                    <Form.Control onChange={ e => setField('date', e.target.value) }  required type="text"/>
                    <Form.Control.Feedback type="invalid">
                      Please provide a date
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Card.Title>Product Properties</Card.Title>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {form.productProps.map((prop, i)=>(
                      <tr key={i}>
                        <td>
                          <Form.Control onChange={ e => setField('name', e.target.value, i) }  required type="text"/>
                          <Form.Control.Feedback type="invalid">
                            Please provide a property name
                          </Form.Control.Feedback>
                        </td>
                        <td>
                          <Form.Control onChange={ e => setField('value', e.target.value, i) }  required type="text"/>
                          <Form.Control.Feedback type="invalid">
                            Please provide a property value
                          </Form.Control.Feedback>
                        </td>
                        <td className="align-middle text-center">
                          <Button variant="link" className="text-danger" onClick={() => removeProp(i)}>
                            Remove
                          </Button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Button variant="success" onClick={handleAddProperty}>
                    + Add Property
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <NavLink className="nav-link" exact activeClassName="active" to="/">
              <Button variant="default">
                Cancel
              </Button>
            </NavLink>
            <Button variant="primary" type="submit">
              Create Product
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Create;
