import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import { useAuth } from "../Context/AuthContext";
import { MdPersonRemove } from "react-icons/md";
import { uuid4 } from "uuid4";
import { useFirestore } from "../Context/FireStoreContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddDetailes() {
  const { currentUser } = useAuth();
  const PnameRef = useRef();
  const SnameRef = useRef();
  const expierenceRef = useRef();
  const descriptionRef = useRef();
  const phoneRef = useRef();
  const [tevila, setTevila] = useState(false);
  const { currenUserInfoState, setCurrenUserInfoState } = useCurrenUserInfo();
  const { addFS,getImages,uploadImagesAndFiles } = useFirestore();
  const navigate = useNavigate();
  const [type, setType] = useState(false);
const [file,setFile]=useState();
const [path,setPath]=useState("");
const [url,setUrl]=useState();





  function handleSubmit(e) {
    e.preventDefault();
    if (type) {
      const UsersDetailes = {
        pName: PnameRef.current.value,
        sName: SnameRef.current.value,
        sofer: type,
        experience: expierenceRef.current.value,
        phone: phoneRef.current.value,
        desription: descriptionRef.current.value,
        tvila: tevila,
        path:url,
        id:currentUser.uid,

      };
      setCurrenUserInfoState(UsersDetailes);
    } else {
      const UsersDetailes = {
        pName: PnameRef.current.value,
        sName: SnameRef.current.value,
        sofer: type,
        count: 0,
        total: 0,
        cartProducts: [],
      };
      setCurrenUserInfoState(UsersDetailes);
    }
    console.log(currentUser);
  }

  
  useEffect(() => {
    if (path !== "") {
      console.log(path);
      const uploadTask = uploadImagesAndFiles(path, file);
      uploadTask.then(() => {
        console.log("upload successful");
        fetchingFile();
      });
    }
  }, [path]);

  function fetchingFile() {
    {
      console.log(getImages(path));
      getImages(path).then((res) => {
        setUrl(res);
      });
    }
  }

  useEffect(() => {
    if (currenUserInfoState?.sofer===false) {
      const info = addFS("Customers", currentUser.email, currenUserInfoState);
      info.then((data) => {
         navigate("/");
      });
    }
    else{
      const info = addFS("Sellers", currentUser.email, currenUserInfoState);
      info.then((data) => {
        navigate("/addingSeller")
      });
    }
  }, [currenUserInfoState]);

 
  return (
    <>
      <Container
        dir="rtl"
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <>
          {" "}
          <h1>האם אתה סופר או קונה?</h1>
          <Form.Select
            className="w-25"
            onChange={() => setType(!type)}
            aria-label="Default select example"
          >
            <option>קונה</option>

            <option>סופר</option>
          </Form.Select>
        </>
        {type === false ? (
          <div className="w-100 mt-4" style={{ maxWidth: "400px" }}>
            <h2>פרטים אישיים :</h2>

            <Card className=" border-primary">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="pname">
                    <Form.Label>שם פרטי</Form.Label>
                    <Form.Control type="string" ref={PnameRef} required />
                  </Form.Group>
                  <Form.Group id="sname">
                    <Form.Label>שם משפחה</Form.Label>
                    <Form.Control type="string" ref={SnameRef} required />
                  </Form.Group>
                  <Button className="w-100 mt-5" type="submit">
                    המשך
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <div className="w-100 mt-4" style={{ maxWidth: "400px" }}>
            <Card className=" border-primary">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="pname">
                    <Form.Label>שם פרטי</Form.Label>
                    <Form.Control type="string" ref={PnameRef} required />
                  </Form.Group>
                  <Form.Group id="sname">
                    <Form.Label>שם משפחה</Form.Label>
                    <Form.Control type="string" ref={SnameRef} required />
                  </Form.Group>
                  <>
                  <h3>העלאת תעודות הסמכה</h3>
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.value);
              setFile(event.target.files[0]);
              setPath(`images/${event.target.files[0].name + uuidv4()}`);
            }}
          /></>
                  <Form.Group id="sname">
                    <Form.Label> כתוב על עצמך תיאור שיופיע באתר </Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: "150px" }}
                      type="string"
                      ref={descriptionRef}
                      required
                    />
                  </Form.Group>
                  <>
                    <h5>האם אתה טובל במקווה?</h5>
                    <Form.Select
                      className="w-25"
                      onChange={() => setTevila(!tevila)}
                      aria-label="Default select example"
                    >
                      <option>לא</option>

                      <option>כן</option>
                    </Form.Select>
                  </>
                  <Form.Group id="sname">
                    <Form.Label>כמה שנות נסיון יש לך בכתיבה? </Form.Label>
                    <Form.Control type="number" ref={expierenceRef} required />
                  </Form.Group>
                  <Form.Group id="sname">
                    <Form.Label>מספר טלפון </Form.Label>
                    <Form.Control type="phone" ref={phoneRef} required />
                  </Form.Group>
                  <Button className="w-100 mt-5" type="submit">
                    המשך
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </>
  );
}
