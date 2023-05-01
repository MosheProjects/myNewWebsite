import React,{useState,useEffect} from 'react'
import { useFirestore } from "../Context/FireStoreContext";
import ThreeDots from "./ThreeDots";
import { useAuth } from "../Context/AuthContext";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import { Button,Card,Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SellersDetailes() {

  const { currentUser } = useAuth();
  const { addFS, updateFS, getDataFS } = useFirestore();
const { currenUserInfoState, setCurrenUserInfoState } = useCurrenUserInfo();
  const { getWholeCollection } = useFirestore();
const [myProducts,setMyProducts]=useState();
const [allProducts,setAllProducts]=useState();
const [message,setMessage]=useState();




  useEffect(()=>{
    const tempArr=[];
    getDataFS("Items", "Products").then((data)=>{
      setAllProducts(data.item);
      console.log(data);
      data.item.forEach((product)=>{
        if(product.id === currenUserInfoState.id)
        tempArr.push(product)
                })
      setMyProducts(tempArr)
      console.log("my product",myProducts);


        })
},[])


function removeItem(itemToRemove){
const newData=allProducts.filter(item=> item.itemNum !== itemToRemove.itemNum);
setAllProducts(newData);
console.log(newData);
const itemsAfterRemove=myProducts.filter(item=> item.itemNum !== itemToRemove.itemNum);
setMyProducts(itemsAfterRemove);
addFS("Items", "Products", {item:newData}).then(()=>{
  setMessage("המוצר הוסר מהרשימה");
  setTimeout(()=>{
    setMessage(null)
  },2000)
})
}

  return (
    <div>
      {message && <Alert>{message}</Alert>}

     { myProducts?.length>0?
<div dir='rtl' className='d-flex mt-4 gap-4 flex-wrap justify-content-center'>
        {
        myProducts.map((item,i)=>{
                return(
                  <div>
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
    </Card.Body>
  </Card>
  <Button onClick={()=>removeItem(item)}>הסר מוצר זה</Button>
  </div>)
            })
    
       
          }
    </div>
   :
<div> <ThreeDots/> <h2>נראה שאין לך כרגע מוצרים פעילים הוסף מוצרים אם יש לך</h2></div>
     }
    </div>
  )
}

