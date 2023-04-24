import React, { useEffect, useState } from "react";
import { Card,Row,Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFirestore } from "../Context/FireStoreContext";



export default function () {

const {getWholeCollection}=useFirestore();
const [sofrim,setSofrim]=useState();


useEffect(()=>{
    const tempArr=[];
    const dataOfUsers = getWholeCollection("Sellers","sofer","true");
    dataOfUsers.then((data)=>{
        console.log(data);
        data.forEach((doc)=>{
tempArr.push(doc.data())
        })
      setSofrim(tempArr);
           
    })
    
},[])



  return (
    <div className=" d-flex flex-wrap justify-content-center gap-3" dir="rtl">
      {sofrim?.map((sofer,i) => {
        return(
            <Row className="row mt-3">
            <Col xs={12} md={6} lg={4} className='col'>
       <Link className="text-decoration-none" to={`/sofrim/${sofer.pName + sofer.sName + i}`}> <Card
          bg={"Secondary"}
          text={"black"}
          style={{ width: "22rem",height:'14rem' }}
          className="mb-2"
        >
          <Card.Header>סופר</Card.Header>
          <Card.Body>
            <Card.Title>{sofer.pName + " " +  sofer.sName}</Card.Title>
            <Card.Text>
             {sofer.desription}
            </Card.Text>
          </Card.Body>
        </Card></Link>
        </Col>
        </Row>
        )
      })}
    </div>
  );
}
