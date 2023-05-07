import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Row, Col, Container, Carousel, Image } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Whatsapp from "../Whatsapp";
import "./styles/homepage.css";
import Purchase from "./Purchase";
import Message from "./Message";
export default function HomePage() {
  const [hover1, setHover1] = useState();
  const [hover2, setHover2] = useState();
  const [hover3, setHover3] = useState();
  const [hover4, setHover4] = useState();
  const [hover5, setHover5] = useState();
  const [hover6, setHover6] = useState();

  return (
    <div className="mb-4 " dir="rtl" style={{ backgroundColor: "LightGray" }}>
      <Message/>
      <Carousel
        style={{ height: "300px" }}
        controls={false}
        indicators={false}
        interval={4000}
      >
        <Carousel.Item>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col md={6} className="text-center">
                <h1 className="mb-4">
                  מחפש לקנות את המזוזה הכי מהודרת ואתה מרגיש אבוד?
                </h1>
                <h4>
                  אצלינו תוכל לוודא שאתה אכן קונה את המוצר הכי טוב והכי מהודר
                  במחיר הכי טוב
                </h4>
                <Link to={"/mezuzot"}>
                  <Button className="mt-3">למזוזות מהודרות לחץ כאן</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col md={6} className="text-center">
                <h1 className="mb-4">
                  הבר-מצווה של הבן מתקרב ואתה מרגיש מבולבל?
                </h1>
                <h4>אצלינו תוכל למצוא את הפרשיות הכי מהודרות מבלי לחשוש</h4>
                <Link to={"/tefilin"}>
                  <Button className="mt-3">
                    לפרשיות תפילין מהודרות לחץ כאן
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col md={6} className="text-center">
                <h1 className="mb-4">
                  האתר בו תוכל למצוא את הסת"ם הכי מהודר בהתאם לכיס שלך
                </h1>
                <h4>
                  סופרי סת"ם שרוצים לבנות את עצמם מחכים לך כאן - הם לא יאכזבו
                  אותך
                </h4>
                <Link to={"/sofrim"}>
                  <Button className="mt-3">לכל סופרי הסת"ם לחץ כאן</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <div >
       

<Image
        src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/327275585_1708260916259147_2958411966578064511_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RPUrG21UhWEAX8-PDO8&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfCmYudQUqEMGzWzI8ZRiMdmeP1LD0OG3gRealSQSke6MQ&oe=64568A7A"
        className=""
        thumbnail
        
      />
<div className="container w-75 mt-4">
  <div className=" justify-content-center ">
      <div className="card bg-light">
        <div className="card-body">
          <h2 className="card-title text-center">מהו הייעוד של האתר?</h2>
          <p className="card-text text-center">המטרה של האתר הוא להנגיש לאלו שלא מבינים בסת"ם אבל לא מתפשרים על הידור ואיכות את הסחורה הטובה ביותר, פה תוכלו לראות את הסחורה בלי שום מתווך, תוכלו לראות את מי שכתב את ההסמכה שלו ואת התמונות של העבודה לו ולפי זה תוכלו לבחור ממי בדיוק אתם רוצים לקנות, כל מזוזה שנכתבה הסוחר מעלה את התמונה של הכתב עם כל הפרטים עליה ,כשבנוסף יהיה מגיה מוסמך מטעמינו שיאשר לפי נראות התמונה את רמת הכשרות של המוצר המדובר</p>
        </div>
    </div>
  </div>
 
</div>
</div>

      <div className=" d-flex mt-5 flex-wrap justify-content-center gap-3">
        <Row className="row">
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              border="10px"
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              style={{
               
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover1 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover1
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
              
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

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover2 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover2
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
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

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover3 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover3
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
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

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover4 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover4
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
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
          <Col xs={12} md={6} lg={4} className="col">
            <Card
              className="mb-3"
              onMouseEnter={() => setHover5(true)}
              onMouseLeave={() => setHover5(false)}
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                transform: hover5 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover5
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
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
                transition: "all 0.2s ease-in-out",
                transform: hover6 ? "scale(1.05)" : "scale(1)",
                boxShadow: hover6
                  ? "0px 2px 20px rgba(0, 0, 0, 0.2)"
                  : "0px 2px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
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
