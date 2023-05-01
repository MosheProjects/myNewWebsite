import React from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFirestore } from '../Context/FireStoreContext'
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { getDataFS } = useFirestore();
  const { setCurrenUserInfoState,currenUserInfoState } = useCurrenUserInfo();
  
  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);
    await login(emailRef.current.value, passwordRef.current.value)
      .then((person) => {console.log(currenUserInfoState); if(currenUserInfoState===null) {navigate('/addDetailes')} else { return getDataFS(person.user.uid)} })
      .then((userData) => { setCurrenUserInfoState(userData);  })
      .then(() => navigate('/'))
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("שגיאת התחברות נסה שנית!");
      })
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Card dir="rtl">
            <Card.Body>
              <h2 className="text-center mb-4">התחברות</h2>
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

                <Button disabled={loading} className="w-100 mt-2 " type="submit">
                  התחבר            </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to={'/forgotPassword'}> שכחת סיסמא?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            איך לכם חשבון? <Link to={'/signup'}>הירשמו</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
