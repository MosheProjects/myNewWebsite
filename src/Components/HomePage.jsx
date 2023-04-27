import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Row, Col, Container, Carousel } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Whatsapp from "../Whatsapp";
export default function HomePage() {
  const [hover1, setHover1] = useState();
  const [hover2, setHover2] = useState();
  const [hover3, setHover3] = useState();
  const [hover4, setHover4] = useState();
  const [hover5, setHover5] = useState();
  const [hover6, setHover6] = useState();

  return (
    <div className="mb-4" dir="rtl" style={{ backgroundColor: "LightGray" }}>
     <Carousel style={{height:'250px'}} className=" d-flex border border-5 justify-content-center align-items-center" indicators={false} nextLabel={null} controls={false}>
  <Carousel.Item  className="border">
    <h1 className="mb-4" style={{ fontSize: '36px' }}>מחפש לקנות את המזוזה הכי מהודרת ואתה מרגיש אבוד?</h1>
    <div className="border rounded" style={{ fontSize: '24px' }}>אצלינו תוכל לוודא שאתה אכן קונה את המוצר הכי טוב והכי מהודר במחיר הכי טוב</div>
  </Carousel.Item>
  <Carousel.Item  className=" border">
    <h1 className="mb-4" style={{ fontSize: '36px' }}>הבר-מצווה של הבן מתקרב ואתה מרגיש מבולבל?</h1>
    <div  className="border rounded " style={{ fontSize: '24px' }}>אצלינו תוכל למצוא את הפרשיות הכי מהודרות מבלי לחשוש</div>
  </Carousel.Item>
  <Carousel.Item  className=" border">
    <h1 className="mb-4" style={{ fontSize: '36px' }}>האתר בו תוכל למצוא את הסת"ם הכי מהודר בהתאם לכיס שלך</h1>
    <p className="border rounded" style={{ fontSize: '24px' }}>סופרי סת"ם מציעים כאן את המוצרים שלהם מבלי אמצעים כל אחד יכול לבדוק מה מתאים עבורו הן מבחינת ההידור והכתב והן מבחינת המחיר  <br/> וכל זה עם יכולת לדרג את הכתב והמוצר של הסופר שממנו קנית</p>
  </Carousel.Item>
</Carousel>

      <div className=" mt-4 d-flex flex-wrap">
        <Row className="row justify-content-center gap-3">
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              border="10px"
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              style={{
                width: "24rem",

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover1 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover1
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                style={{ height: "230px" }}
                variant="top"
                src="https://veata-kadosh.com/wp-content/uploads/2022/12/0D9A1DC0-8E44-45F5-B9CC-74CF48796CE2.jpeg"
              />
              <Card.Body>
                <Card.Title className="text-center">מזוזות</Card.Title>
                <Card.Text className="text-center">
                  מזוזות מהדרין נבדקו על ידי מגיהים יראי שמים
                </Card.Text>
                <Link to={"/mezuzot"}>
                  <Button variant="dark" className="text-center">
                    כל המזוזות
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              style={{
                width: "24rem",

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover2 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover2
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                style={{ height: "230px" }}
                variant="top"
                src="https://www.tfilot.org/wp-content/uploads/2021/06/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%AA%D7%A4%D7%99%D7%9C%D7%99%D7%9F-300x175.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">תפילין</Card.Title>
                <Card.Text className="text-center">
                  תפילין מהדרין נבדקו על ידי מגיהים יראי שמים
                </Card.Text>
                <Link to={"/tefilin"}>
                  <Button variant="dark" className="text-center">
                    כל התפילין
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              onMouseEnter={() => setHover3(true)}
              onMouseLeave={() => setHover3(false)}
              style={{
                width: "24rem",

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover3 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover3
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                style={{ height: "230px" }}
                variant="top"
                src="https://kavhalacha.co.il/images/avi/images/62328072_l.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">מגילות</Card.Title>
                <Card.Text>
                  מגילות מהדרין נבדקו על ידי מגיהים יראי שמים
                </Card.Text>
                <Link to={"/megilot"}>
                  {" "}
                  <Button variant="dark">כל המגילות</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              onMouseEnter={() => setHover4(true)}
              onMouseLeave={() => setHover4(false)}
              style={{
                width: "24rem",

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover4 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover4
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                style={{ height: "230px" }}
                variant="top"
                src="https://tifarashop.co.il/content/images/thumbs/0002002_-.jpeg"
              />
              <Card.Body>
                <Card.Title>ספרי תורה</Card.Title>
                <Card.Text>
                  ספרי תורה מהדרין נבדקו על ידי מגיהים יראי שמים
                </Card.Text>
                <Link to={"/tora"}>
                  {" "}
                  <Button variant="dark">כל הספרי תורה</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div
        className="d-flex justify-content-center align-items-center mt-3"
        style={{ backgroundColor: "brown", height: "150px" }}
      >
        <h1>סופרים ומגיהים</h1>
      </div>
      <div className=" mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              className="mb-3"
              onMouseEnter={() => setHover5(true)}
              onMouseLeave={() => setHover5(false)}
              style={{
                cursor: "pointer",
                width: "24rem",
                transition: "all 0.2s ease-in-out",
                transform: hover5 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover5
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                style={{ height: "230px" }}
                variant="top"
                src="https://www.picshare.co.il/m_pictures/img150825.jpg"
              />
              <Card.Body>
                <Card.Title>סופרים</Card.Title>
                <Card.Text>
                  סופרים בקיאים ויראי שמים מקפידים על קלה כבחמורה
                </Card.Text>
                <Link to={"/sofrim"}>
                  <Button variant="dark">לכל הסופרים</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              className="mb-3"
              bg="blue"
              onMouseEnter={() => setHover6(true)}
              onMouseLeave={() => setHover6(false)}
              style={{
                cursor: "pointer",
                width: "24rem",
                transition: "all 0.2s ease-in-out",
                transform: hover6 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover6
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                style={{ height: "230px" }}
                variant="top"
                src="https://keterhalacha.co.il/wp-content/uploads/2019/12/IMG-20160510-WA0032.jpg"
              />
              <Card.Body>
                <Card.Title>מגיהים</Card.Title>
                <Card.Text>
                  מגיהים בקיאים ויראי שמים מקפידים על קלה כבחמורה
                </Card.Text>
                <Link to={"/magihim"}>
                  <Button variant="dark">לכל המגיהים</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Whatsapp />
      </div>
    </div>
  );
}
