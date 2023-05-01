import React, { useState, useEffect } from "react";
import { useFirestore } from "../Context/FireStoreContext";
import { useAuth } from "../Context/AuthContext";
import AddingSeller from "./AddingSeller";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Card,Row,Col } from "react-bootstrap";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import SellersDetailes from "./SellersDetailes";



export default function UserDetailes() {
  const { addFS, updateFS, getDataFS } = useFirestore();
  const [data, setData] = useState();
  const { currentUser } = useAuth();
  const { currenUserInfoState } = useCurrenUserInfo();

  console.log(currenUserInfoState);

  return (
    <div dir="rtl" className="d-flex flex-column mt-5">
      <h1>שלום {currenUserInfoState?.pName}</h1>
      <h2> אזור אישי</h2>
      { !currenUserInfoState.sofer? (
        <Tabs
          defaultActiveKey="account"
          id="justify-tab-example"
          className="mb-3 d-flex justify-content-center"
          justify
          
        >
          <Tab eventKey="account" title="החשבון שלך" >
            <div className="vh-100 " >חשבון שלך</div>
          </Tab>
          <Tab eventKey="orders" title="ההזמנות שלך">
            <div  className="mb-3  d-flex flex-wrap justify-content-center gap-3 ">{currenUserInfoState?.cartProducts?.map((item)=>{
              return(
                <Row className="row mt-3">
                <Col xs={12} md={6} lg={4} className='col'>
                  <Card className="mt-3" style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{item.product.catagory[1]}</Card.Title>
                  <Card.Text>
                     <p className="d-flex gap-2"><h5>סופר:</h5>{item.product.name}</p> 
                   <p  className="d-flex gap-2"><h5>על המוצר:</h5>{item.product.description}</p> 
                     <p  className="d-flex gap-2"> <h5>כתב:</h5>{item.product.script}</p> 
                   <p  className="d-flex gap-2"> <h5>מחיר:</h5> {item.product.price}</p> 
<p  className="d-flex gap-2"><h5>כמות:</h5>{item.amount}</p>
                  </Card.Text>
                  </Card.Body>
                </Card>
                </Col></Row>)
            })} </div>
          </Tab>
        </Tabs>
      ) : (
        <Tabs
          defaultActiveKey="account"
          id="justify-tab-example"
          className="mb-3 "
          justify
        >
          <Tab eventKey="account" title="החשבון שלך">
            <div className="vh-100 ">חשבון שלך</div>
          </Tab>
          <Tab eventKey="orders" title="הזמנות">
            <div  className="vh-100 ">ההזמנות שלך</div>
          </Tab>
          <Tab eventKey="products" title="מוצרים פעילים">
            <div  className=""><SellersDetailes/> </div>
          </Tab>
          <Tab eventKey="adding-products" title="הוסף מוצרים לחנות שלך">
            <div className=" justify-content-center align-items-center">
              <AddingSeller />
            </div>
          </Tab>
        </Tabs>
      )}
    </div>
  );
}
