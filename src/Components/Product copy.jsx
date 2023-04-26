import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFirestore } from "../Context/FireStoreContext";
import ThreeDots from "./ThreeDots";
import { useAuth } from "../Context/AuthContext";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";

export default function Product() {
  const { currentUser,logout } = useAuth();
  const { itemNum } = useParams();
  const [cartProducts, setCartProducts] = useState();
  const [count, setCount] = useState(0);
  const { addFS, updateFS, getDataFS } = useFirestore();
  const [currProduct, setCurrProduct] = useState();
const [orders,setOrders]=useState({});
const [flag,setFlag]=useState(false);
const [message,setMessage]=useState('');
const { currenUserInfoState, setCurrenUserInfoState } = useCurrenUserInfo();
const [index,setIndex]=useState();
const [sofer, setSofer] = useState();
  const [sofrim, setSofrim] = useState();
  const { getWholeCollection } = useFirestore();

  useEffect(() => {
    getDataFS("Items", "Products").then((data) => {
      setCurrProduct(data.item.find((item,i) =>  item.itemNum === itemNum));
    console.log(currProduct);
    });
  }, []);

  

  useEffect(()=>{
    if(flag)
  {const info = updateFS("Customers", currentUser.email,"cartProducts",currenUserInfoState.CartProducts)
  info.then((data)=>{
    console.log("uploaded",data);
    setMessage("המוצר נוסף לסל הקניות שלך!");

  })
}
},[currenUserInfoState])

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
    const findSofer=sofrim.find((s, i) =>s.id === currProduct.id );
    setIndex(sofrim.findIndex((element) => element.id === currProduct.id))
    setSofer(findSofer);
    console.log("check sofeeR:",sofer);
  }
}, [sofrim]);


  const addToCart = () => {
    const newOrder={
      amount:count,
      product:currProduct,
    }
    if(currenUserInfoState?.cartProducts.length === 0){
      setCurrenUserInfoState({...currenUserInfoState,CartProducts:newOrder})
      setFlag(true);
    }
    else{
      const tempArr = [...currenUserInfoState.CartProducts, newOrder];
      setCurrenUserInfoState({...currenUserInfoState,CartProducts:tempArr})
      setFlag(true);
    }
      
  };


  const handlePlus = () => {
    if (count <= currProduct.amount) {
      setCount(count + 1);
    }
  };


  const handleMin = () => {
    console.log(currProduct);

    if (count > 0) setCount(count - 1);
  };



  return (
    <div
      dir="rtl"
    >
      {
        currenUserInfoState?.sofer?<div><Alert>אתה סופר ואינך יכול לרכוש במסגרת חשבונך  אנא התנתק מהחשבון סופר והירשם מחדש כלקוח</Alert>
        <Link  to={'/signup'}><Button onClick={logout}>להרשמה</Button></Link>
        </div>

      :currProduct? (
        <div className="d-flex flex-column justify-content-center align-items-center gap-5"
        >

          <Link to={-1}>
            <Button className="mt-2" style={{right:'0' ,position:'absolute'}}>חזרה לחנות</Button>
          </Link>
            {message && <Alert>{message}</Alert>}
            <h1 className="bg-secondary rounded p-3">{currProduct.catagory[1]} מתוצר של {currProduct.name}</h1>
<h3 className="bg-secondary rounded p-3 d-flex flex-row"> כתב-<h5>{currProduct.script}</h5> גודל-<h5>{currProduct.size}</h5> רמת כשרות-<h5>{currProduct.level}</h5></h3>
              <img className="w-25 h-25" src={currProduct.img} />
              

              <div className="d-flex flex-column justify-content-center w-25 gap-4">
                <div className="d-flex gap-3 align-items-center">
                  <h2>מחיר:</h2> <h5> {currProduct.price} שקלים</h5>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-5">
                  <Button variant="secondary" className="rounded" onClick={handleMin}>-</Button>
                  <p>{count}</p>
                  <Button variant="secondary"  className="rounded" onClick={handlePlus}>+</Button>
                </div>

              {count ? (
                <Button disabled={flag}  variant="secondary" className="rounded" onClick={addToCart}>הוסף לסל</Button>
              ) : (
                <p>הוסף כמות</p>
              )}
         
          </div>
          <div className="col border border-2 w-50 mt-4 p-3 bg-secondary mb-4">
            <h3>תיאור של המוצר:</h3>
            <p>{currProduct.description}</p>
          </div>
          <Link to={`/sofrim/${sofer?.pName+sofer?.sName+index}`}>לעוד מוצרים של הסופר הזה</Link>
        </div>
      ) : (
        <ThreeDots />
      )}
    </div>
  );
}
  