import './Products.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Products() {
  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h2>Products</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
        <Form>
          <Form.Row className="align-items-center">
            <Col>
              <Form.Label htmlFor="search" srOnly>
                Name
              </Form.Label>
              <Form.Control id="search"/>
            </Col>
            <Col xs="auto">
              <Button type="submit">
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
        </Col>
      </Row>
      <Row>
        <Col xs md="4" className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Property</Card.Title>
              <strong>UPC</strong>
              <p>123456789</p>
              <strong>Available On</strong>
              <p>12/18/2022</p>
              <Card.Title>Properties</Card.Title>
              <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Color</td>
                      <td>Green</td>
                    </tr>
                  </tbody>
                </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
