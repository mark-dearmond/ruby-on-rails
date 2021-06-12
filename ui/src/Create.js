import './Create.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function Create() {
  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h2>Create New Product</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Form>

                <Card.Title>Product Info</Card.Title>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="upc">
                  <Form.Label>UPC</Form.Label>
                  <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="date">
                  <Form.Label>Available On</Form.Label>
                  <Form.Control type="text"/>
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
                    <tr>
                      <td><Form.Control type="text"/></td>
                      <td><Form.Control type="text"/></td>
                      <td className="align-middle text-center">
                        <Button variant="link" className="text-danger">
                          Remove
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="success">
                  Add Property
                </Button>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button variant="default" type="submit">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Create Product
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Create;
