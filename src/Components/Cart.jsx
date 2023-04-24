import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {BsFillTrashFill} from 'react-icons/bs'
import { useFirestore } from "../Context/FireStoreContext";
import { useAuth } from "../Context/AuthContext";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";

export default function Cart() {
  const {currentUser}=useAuth()
  const {getDataFS,addFS,updateFS } =useFirestore();
const {currenUserInfoState,setCurrenUserInfoState}=useCurrenUserInfo();

useEffect(()=>{
  addFS("Users", currentUser.uid,currenUserInfoState)
},[currenUserInfoState])




    const handleCart=()=>{
      setCurrenUserInfoState({...currenUserInfoState,CartProducts:[],total:0})
      }

const handleRemove=(item)=>{
  const updated=currenUserInfoState.cartProducts.filter((i)=>item != i)
  setCurrenUserInfoState({...currenUserInfoState,CartProducts:updated,total:currenUserInfoState.total-(item.product.price*item.amount)})
}
      

       const minItem=(item)=>{
        if(item.amount>1){
const updatedItems=currenUserInfoState.cartProducts.map((i)=>{
  if(i===item){
    return{...i,amount: i.amount-1}
  }
    return i;
  }
)
setCurrenUserInfoState({...currenUserInfoState,CartProducts:updatedItems,total:currenUserInfoState.total-item.product.price})

        }}

const addItem=(item)=>{
  const updatedItems=currenUserInfoState.cartProducts.map((i)=>{
    if(i===item){
      return{...i,amount: i.amount +1}
    }
      return i;
    }
  )
  setCurrenUserInfoState({...currenUserInfoState,CartProducts:updatedItems,total:currenUserInfoState.total+item.product.price})
}
       
      function handleCheckOut()
      {
        getDataFS("Items", "Products").then((data) => {
          data.item.map((item1) => 
          currenUserInfoState.cartProducts.map((item2)=>{
            if(item1.itemNum ===item2.product.itemNum)
            {return item1.amount - item2.product.amount}
            return item1;
          })
         
          )
          addFS("Items", "Products",data);

        });
      }
  
  
  return (
   
    <div className="d-flex align-items-center justify-content-center flex-column gap-5">
       {  currenUserInfoState?.cartProducts.length>0?
       <>
        <div><h1>you have {currenUserInfoState?.cartProducts?.length} products in the cart</h1></div>
       { currenUserInfoState?.cartProducts?.map((item,index) => {
        
        return (
          <div style={{display:'flex',flexDirection:'row',gap:'50px',justifyContent:'center',alignItems:'center',border:'solid 2px black',borderRadius:'15px'}} key={index}>
            <h1>{item.product?.name}</h1>
            <img
              style={{ height: "100px", width: "100px" }}
              src={item.product.img}
              alt=""
            />
            <p>{item.product.price}$</p>
            <p style={{display:'flex',gap:'20px'}}>
            <button  onClick={()=>minItem(item)}>-</button>
              x{item.amount}
            <button  onClick={()=>addItem(item)}>+</button>
            </p>
             <BsFillTrashFill onClick={()=>handleRemove(item)}/> 
          </div>
        );
        })

        }
        <div style={{display:'flex',gap:'60px'}}>
        <button onClick={handleCheckOut}>proceed to checkout</button>

 <button onClick={handleCart}>Empty cart</button>
        <Link to={`/Shop`}>
  <button>continue shopping</button>
</Link></div>
<div>
    <h2>Total cost:{currenUserInfoState.total}
</h2>

        </div>
        </>
          : <h1> your cart is empty</h1>}
        </div>

 

    
  );
}
