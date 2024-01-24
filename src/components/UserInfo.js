import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function UserInfo() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text>Full Name</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-muted">Ako Gachechiladze</Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Card.Text>Email</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-muted">Emailako@gmail.com</Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <Card.Text>Phone</Card.Text>
                </Col>
                <Col>
                  <Card.Text className="text-muted">42434234234234</Card.Text>
                </Col>
              </Row>
              <hr />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default UserInfo;