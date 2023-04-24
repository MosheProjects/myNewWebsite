import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MyContext } from "../Context/ContextProvider";
import { useContext } from 'react';
import {BsFillTrashFill} from 'react-icons/bs'

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const { cartProducts,total, setCartProducts, count, setCount ,setTotal} =useContext(MyContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
     

  return (
    <>
      <Button  variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {total===0? <h2>the cart is empty</h2>:                     <h2>Total:{total}$</h2>
}
         {cartProducts.map((item)=>{
            return(
                <div style={{height:'200px',width:'500px',display:'flex',flexDirecyion:'row',gap:'8px',justifyContent:'center',alignItems:'center',border:'solid 2px black',borderRadius:'15px'}}>
                <h1>{item.name}</h1>
                <img
                  style={{ height: "50px", width: "60px" }}
                  src={item.img}
                  alt=""
                />
                <p>{item.price}$</p>
                <p style={{display:'flex',gap:'20px'}}>
                <button  >-</button>
                  x{item.count}
                <button> +</button>
                </p>
                 <BsFillTrashFill /> 
              </div>)

         })}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function Example() {
  return (
    <>
      {['Shopping-Cart'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

