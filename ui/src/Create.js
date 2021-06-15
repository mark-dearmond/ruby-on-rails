import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import './Create.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import axios from "axios";
import Alert from 'react-bootstrap/Alert'

function Create() {
  
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const regex = /^[0-9\b]+$/;

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({show: false, variant: '', message: ''});
  const [form, setForm] = useState({productProps: [{name: null, value: null}], availableOnDate: tomorrow})

  const setField = (field, value, i) => {
    if(i >= 0) {
      const productProps = [...form.productProps];
      productProps[i][field] = value;
      setForm({...form, productProps})
    } else if(field === 'upc') {  
      if(value === '' || regex.test(value)) {
        setForm({...form, [field]: value})
      }
    } else {
      setForm({...form, [field]: value})
    }
  }

  const handleSubmit = (event) => {
    const formEl = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (formEl.checkValidity() !== false) {
      setLoading(true)
      axios.post('/api/v1/products', {name: form.name.toLowerCase(), upc: form.upc, available_on: form.availableOnDate})
      .then(product => {
        form.productProps.map(newProperty => {
          axios.post('/api/v1/properties', {name: newProperty.name.toLowerCase()})
          .then(property => {
            axios.post('/api/v1/product_properties', {value: newProperty.value, product_id: product.data.id, property_id: property.data.id})
            .then(res => {
              setForm({productProps: [{name: null, value: null}], availableOnDate: tomorrow})
              setLoading(false)
              setAlert({show: true, variant: 'success', message: 'Product created successfully!'})
            })
            .catch(err => setAlert({show: true, variant: 'danger', message: err}))
          })
          .catch(err => setAlert({show: true, variant: 'danger', message: err}))
        })
      })
      .catch(err => setAlert({show: true, variant: 'danger', message: err}))
      setValidated(false);
    } 
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
      {alert.show && 
        <Alert variant={alert.variant} onClose={() => setAlert({show: false})} dismissible>
          {alert.message}
      </Alert>
      }
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
                    <Form.Control value={form.name ? form.name : ''} onChange={ e => setField('name', e.target.value) } required type="text"/>
                    <Form.Control.Feedback type="invalid">
                      Please provide a name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="upc">
                    <Form.Label>UPC</Form.Label>
                    <Form.Control value={form.upc ? form.upc : ''} onChange={ e => setField('upc', e.target.value) }  required type="text"/>
                    <Form.Control.Feedback type="invalid">
                      Please provide a UPC
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="availableOnDate">
                    <Form.Label>Available On</Form.Label>
                    <DatePicker value={form.availableOnDate ? form.availableOnDate : tomorrow} minDate={tomorrow} className="form-control" required selected={form.availableOnDate} onChange={ date => setField('availableOnDate', date) } />
                    {/* <Form.Control onChange={ e => setField('date', e.target.value) }  required type="text"/> */}
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
                          <Form.Control value={form.productProps[i]['name'] ? form.productProps[i]['name'] : ''} onChange={ e => setField('name', e.target.value, i) }  required type="text"/>
                          <Form.Control.Feedback type="invalid">
                            Please provide a property name
                          </Form.Control.Feedback>
                        </td>
                        <td>
                          <Form.Control value={form.productProps[i]['value'] ? form.productProps[i]['value'] : ''} onChange={ e => setField('value', e.target.value, i) }  required type="text"/>
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
                  <Button variant="default" className="text-success" onClick={handleAddProperty}>
                    + Add Property
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <Link to="/">
              <Button variant="default">
                Cancel
              </Button>
            </Link>
            <Button variant="primary" type="submit">
              { loading && 'Loading' }
              { !loading && 'Create Product' }
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Create;
