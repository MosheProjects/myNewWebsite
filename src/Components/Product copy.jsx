import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Alert, Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFirestore } from "../Context/FireStoreContext";
import ThreeDots from "./ThreeDots";
import { useAuth } from "../Context/AuthContext";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";

export default function Product() {
  const { currentUser, logout } = useAuth();
  const { itemNum } = useParams();
  const [cartProducts, setCartProducts] = useState();
  const [count, setCount] = useState(0);
  const { addFS, updateFS, getDataFS } = useFirestore();
  const [currProduct, setCurrProduct] = useState();
  const [allitems, setAllItems] = useState({});
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState("");
  const { currenUserInfoState, setCurrenUserInfoState } = useCurrenUserInfo();
  const [index, setIndex] = useState();
  const [sofer, setSofer] = useState();
  const [sofrim, setSofrim] = useState(null);
  const { getWholeCollection } = useFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    getDataFS("Items", "Products").then((data) => {
      setAllItems(data.item);
      setCurrProduct(data.item.find((item, i) => item.itemNum === itemNum));
      console.log(currProduct);
    });
  }, []);

  useEffect(() => {
    const tempArr = [];
    const dataOfUsers = getWholeCollection("Sellers", "sofer", true);
    dataOfUsers.then((data) => {
      console.log(data);
      data.forEach((doc) => {
        tempArr.push(doc.data());
      });
      setSofrim(tempArr);
    });
  }, []);

  useEffect(() => {
    if (sofrim !== null) {
      const findSofer = sofrim.find((s, i) => s.id === currProduct.id);
      setIndex(sofrim.findIndex((element) => element.id === currProduct.id));
      setSofer(findSofer);
      console.log("check sofeeR:", sofer);
    }
  }, [sofrim]);

  const addToCart = () => {
    const newOrder = {
      amount: count,
      product: currProduct,
    };
    const tempArr = [];

    if (currenUserInfoState?.cartProducts.length === 0) {
      console.log("length of arr", currenUserInfoState.cartProducts);
      console.log("got in to empty array");
      tempArr.push(newOrder);
      const info = updateFS(
        "Customers",
        currentUser.email,
        "cartProducts",
        tempArr
      );
      info.then((data) => {
        console.log("uploaded", data);
        setMessage("המוצר נוסף לסל הקניות שלך!");
      });
      setFlag(true);
    } else {
      console.log("got in to FULL array");

      const tempArr = [...currenUserInfoState.cartProducts];
      tempArr.push(newOrder);
      const info = updateFS(
        "Customers",
        currentUser.email,
        "cartProducts",
        tempArr
      );
      info.then((data) => {
        console.log("uploaded", data);
        setMessage("המוצר נוסף לסל הקניות שלך!");
      });
      setFlag(true);
    }
  };

  useEffect(() => {
    if (flag) {
      if (currProduct.amount - count === 0) {
        const itemsAfterPurchas = allitems.filter((item) => {
          return item.itemNum !== currProduct.itemNum;
        });
        addFS("Items", "Products", { item: itemsAfterPurchas }).then(() => {
          navigate("/afterPurchase");
        });
      } else {
        currProduct.amount = currProduct.amount - count;
        const itemsAfterPurchas = allitems?.map((item) => {
          if (item.itemNum === currProduct.itemNum) return currProduct;
          return item;
        });
        addFS("Items", "Products", { item: itemsAfterPurchas }).then(() => {
          navigate("/afterPurchase");
        });
      }
    }
  }, [flag]);

  const handlePlus = () => {
    if (count < currProduct.amount) {
      setCount(count + 1);
    }
  };

  const handleMin = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div dir="rtl">
      {currenUserInfoState?.sofer ? (
        <div>
          <Alert>
            אתה סופר ואינך יכול לרכוש במסגרת חשבונך אנא התנתק מהחשבון סופר
            והירשם מחדש כלקוח
          </Alert>
          <Link to={"/signup"}>
            <Button onClick={logout}>להרשמה</Button>
          </Link>
        </div>
      ) : currProduct ? (
        <Row className="my-5">
          <Col md={6}>
            <Image src={currProduct.img} className="w-100" thumbnail />
          </Col>
          <Col md={6}>
            <h1 className="mb-4">{currProduct.name}</h1>
            {message && <Alert variant="danger">{message}</Alert>}
            <h4 className="mb-4">{currProduct.description}</h4>
            <h5 className="mb-4">
              כתב: {currProduct.script}, גודל: {currProduct.size}, רמת כשרות:{" "}
              {currProduct.level}
            </h5>
            <h3 className="mb-4">
              מחיר: {currProduct.price} <span>ש"ח</span>
            </h3>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  onClick={handleMin}
                >
                  -
                </Button>
                <h4 className="mx-3 mb-0">{count}</h4>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  onClick={handlePlus}
                >
                  +
                </Button>
                <span contentEditable>כמות במלאי: {currProduct.amount}</span>{" "}
              </div>
              <Button
                disabled={flag}
                variant="secondary"
                className="rounded-pill"
                onClick={addToCart}
              >
                הוסף לסל
              </Button>
            </div>
            <Link to={`/sofrim/${sofer?.pName + sofer?.sName + index}`}>
              לעוד מוצרים של הסופר הזה
            </Link>
          </Col>
        </Row>
      ) : (
        <ThreeDots />
      )}{" "}
    </div>
  );
}
