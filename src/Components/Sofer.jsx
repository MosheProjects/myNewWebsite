import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router";
import genPerson from "../Images/gen-person.jpg";
import { useEffect, useState } from "react";
import { useFirestore } from "../Context/FireStoreContext";
import { useAuth } from "../Context/AuthContext";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Tab, Tabs,Button,Card } from "react-bootstrap";
import ThreeDots from "./ThreeDots";

export default function Sofer() {
  const { name } = useParams();
  const { currentUser } = useAuth();
  const { getWholeCollection, getDataFS } = useFirestore();
  const [sofer, setSofer] = useState(null);
  const [sofrim, setSofrim] = useState();
  const [flag, setFlag] = useState(false);
  const [myImages, setMyImages] = useState(null);
const [allProducts,setAllProducts]=useState([]);

  useEffect(() => {
    const tempArr = [];
    const dataOfUsers = getWholeCollection("Sellers", "sofer", true);
    dataOfUsers.then((data) => {
      console.log(data);
      data.forEach((doc) => {
        tempArr.push(doc.data());
      });
      setSofrim(tempArr);
      setFlag(true);
    });
    
  }, []);

  useEffect(() => {
    if (flag) {
      const findSofer = sofrim?.find((s, i) => s.pName + s.sName + i === name);
      setSofer(findSofer);
    }
   
  }, [sofrim]);
useEffect(()=>{
if(sofer){
  getDataFS("Images", sofer.id).then((data) => {
    setMyImages(data.urls);
  });
  getDataFS("Items","Products").then((data)=>{
    const arrayOfCurrProducts=[];
    data.item.map((item)=>{
      if(item.id===sofer.id)
      arrayOfCurrProducts.push(item);
    })
    setAllProducts(arrayOfCurrProducts)
console.log(allProducts);
  })
}
},[sofer])
  return (
    <div dir="rtl">
      {sofer ? (
        <Tabs id="responsive-tabs" className="mb-3" justify transition={false}>
          <Tab eventKey="profile" title="פרופיל">
            <div
              className="gradient-custom-2"
              style={{ backgroundColor: "#9de2ff" }}
            >
              <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                  <MDBCol lg="9" xl="7">
                    <MDBCard>
                      <div
                        className="rounded-top text-white d-flex flex-row"
                        style={{ backgroundColor: "#000", height: "200px" }}
                      >
                        <div
                          className="ms-4 mt-5 d-flex flex-column"
                          style={{ width: "150px" }}
                        >
                          <MDBCardImage
                            src={genPerson}
                            alt="Generic placeholder image"
                            className="mt-4 mb-2 img-thumbnail"
                            fluid
                            style={{ width: "150px", zIndex: "1" }}
                          />
                          <MDBBtn
                            outline
                            color="dark"
                            style={{ height: "36px", overflow: "visible" }}
                          >
                            Edit profile
                          </MDBBtn>
                        </div>
                        <div className="ms-3" style={{ marginTop: "130px" }}>
                          <MDBTypography tag="h5">
                            {sofer.pName + " " + sofer.sName}
                          </MDBTypography>
                          <MDBCardText>סופר</MDBCardText>
                        </div>
                      </div>
                      <div
                        className="p-4 text-black"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <div className="d-flex justify-content-end text-center py-1">
                          <div className="px-3">
                            <MDBCardText className="mb-1 h5">1026</MDBCardText>
                            <MDBCardText className="small text-muted mb-0">
                              מוצרים שנמכרו
                            </MDBCardText>
                          </div>
                          <div>
                            <MDBCardText className="mb-1 h5">478</MDBCardText>
                            <MDBCardText className="small text-muted mb-0">
                              מוצרים קיימים
                            </MDBCardText>
                          </div>
                        </div>
                      </div>
                      <MDBCardBody className="text-black p-4">
                        <div className="mb-5">
                          <p className="lead fw-normal mb-1">אודות</p>
                          <div
                            className="p-4"
                            style={{ backgroundColor: "#f8f9fa" }}
                          >
                            <MDBCardText className="font-italic mb-1">
                              {sofer.desription}
                            </MDBCardText>
                          </div>
                        </div>
                        <Tabs
                          defaultActiveKey="pics"
                          id="uncontrolled-tab-example"
                          className="mb-3"
                          justify
                          transition={false}
                          fill
                        >
                          <Tab eventKey="pics" title="תמונות של הכתיבה שלי ">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                             
                            </div>
                            {
                            myImages? 
                            myImages.map((item) => {
                              return(  <MDBRow>
                                <MDBCol className="mb-2">
                                  <MDBCardImage
                                    src={item}
                                    alt="image 1"
                                    className="w-100 rounded-3"
                                  />
                                </MDBCol>
                              </MDBRow>)
                            
                            }):<div>אין תמונות של העבודות של סופר זה להצגה כרגע </div>}
                          </Tab>
                          <Tab eventKey="documents" title="תעודות ההסמכה שלי">
                            <iframe
                              src={sofer.path}
                              className=" w-100 rounded-3"
                              style={{ height: "450px" }}
                            ></iframe>
                          </Tab>
                        </Tabs>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </Tab>

          <Tab eventKey="products" title="מוצרים">
            <h1>המוצרים שלי</h1>
      {allProducts.length !== 0?
        allProducts.map((item)=>{
          return(
            <Card style={{ width: '22rem' }}>
            <Card.Img  style={{height:'230px'}} variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.catagory[1]} </Card.Title>
              <Card.Text>
              <span style={{fontWeight:'bold'}}> שם הסופר:</span>{item.name}
                <br/>
                <span style={{fontWeight:'bold'}}>   כתב:</span>{item.script}
                <br/>
                <span style={{fontWeight:'bold'}}>  גודל:</span>{item.size}
                <br/>
                <span style={{fontWeight:'bold'}}> רמת הידור:</span>{item.level}
                <br/>
                <span style={{fontWeight:'bold'}}>  הגהה:</span>{item.check}
              </Card.Text>
              <Link to={`/${item.catagory[0]}/${item.itemNum}`}><Button variant="primary">לרכישה</Button></Link>
            </Card.Body>
          </Card>
          )
        }):<div className="vh-100 mt-5">אין לסופר כרגע מוצרים להצגה</div>
      }
          </Tab>
          <Tab eventKey="reveiws" title="חוות דעת">
            חוות דעת על הסופר
          </Tab>
        </Tabs>
      ) : (
        <ThreeDots />
      )}
    </div>
  );
}
