import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Alert } from "react-bootstrap";

export default function () {
  return (
    <div>
      {" "}
      <Container
        dir="rtl"
        className="d-flex align-items-center justify-content-center text-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body className="d-flex flex-column justify-content-evenly">
              <Alert variant="danger">אנא אשר את האימייל שלך</Alert>
              <a href="gmail.com">לתיבת המייל</a>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
