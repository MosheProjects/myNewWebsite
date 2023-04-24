import React from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup,currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("סיסמא לא תואמת");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setLoading(false);
      return setError("שגיאה ביצירת חשבון");
    }
    navigate('/addDetailes')
  }

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
      <div className="w-100" style={{maxWidth:'400px'}}>
      <Card dir="rtl">
        <Card.Body>
          <h2 className="text-center mb-4">הרשמה</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>אימייל</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>סיסמא</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>אימות סיסמא</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2" type="submit">
              הרשמה
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
       יש לך כבר חשבון? <Link to={'/login'}>היכנס</Link>
      </div>
      </div>
      </Container>
    </>
  );
}
