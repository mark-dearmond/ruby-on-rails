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

function Create() {
  
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({productProps: [{name: null, value: null}], availableOnDate: tomorrow})

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
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (formEl.checkValidity() !== false) {
      setForm({productProps: [{name: null, value: null}], availableOnDate: tomorrow})
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
            <Link exact activeClassName="active" to="/">
              <Button variant="default">
                Cancel
              </Button>
            </Link>
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
