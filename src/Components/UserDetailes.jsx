import React, { useState, useEffect } from "react";
import { useFirestore } from "../Context/FireStoreContext";
import { useAuth } from "../Context/AuthContext";
import AddingSeller from "./AddingSeller";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import SellersDetailes from "./SellersDetailes";



export default function UserDetailes() {
  const { addFS, updateFS, getDataFS } = useFirestore();
  const [data, setData] = useState();
  const { currentUser } = useAuth();
  const { currenUserInfoState } = useCurrenUserInfo();

  

  return (
    <div dir="rtl" className="d-flex flex-column mt-5">
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
            <div  className="vh-100 ">ההזמנות שלך</div>
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
            <div  className="vh-100 "><SellersDetailes/> </div>
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
