import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useFirestore } from "../Context/FireStoreContext";
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
import { Tab, Tabs } from "react-bootstrap";
import ThreeDots from "./ThreeDots";

export default function Sofer() {
  const { name } = useParams();
  const { getWholeCollection } = useFirestore();
  const [sofer, setSofer] = useState();
  const [sofrim, setSofrim] = useState();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const tempArr = [];
    const dataOfUsers = getWholeCollection("Sellers", "sofer",true);
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

  return (
    <div dir="rtl">
      {sofer ? (
        <Tabs
          id="responsive-tabs"
          className="mb-3"
          justify
          transition={false}
        >
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
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
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
                              <MDBCardText className="lead fw-normal mb-0">
                                תמונות של המוצרי סת"ם שלי{" "}
                              </MDBCardText>
                              <MDBCardText className="mb-0">
                                <a href="#!" className="text-muted">
                                  Show all
                                </a>
                              </MDBCardText>
                            </div>
                            <MDBRow>
                              <MDBCol className="mb-2">
                                <MDBCardImage
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                  alt="image 1"
                                  className="w-100 rounded-3"
                                />
                              </MDBCol>
                              <MDBCol className="mb-2">
                                <MDBCardImage
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                  alt="image 1"
                                  className="w-100 rounded-3"
                                />
                              </MDBCol>
                            </MDBRow>
                            <MDBRow className="g-2">
                              <MDBCol className="mb-2">
                                <MDBCardImage
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                  alt="image 1"
                                  className="w-100 rounded-3"
                                />
                              </MDBCol>
                              <MDBCol className="mb-2">
                                <MDBCardImage
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                  alt="image 1"
                                  className="w-100 rounded-3"
                                />
                              </MDBCol>
                            </MDBRow>
                          </Tab>
                          <Tab  eventKey="documents" title="תעודות ההסמכה שלי">
                            <iframe
                              src={sofer.path}
                              className=" w-100 rounded-3"
                              style={{height:'450px'}}
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
            prducts{" "}
          </Tab>
        </Tabs>
      ) : (
        <ThreeDots />
      )}
    </div>
  );
}
