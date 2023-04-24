import React, { useEffect, useRef, useState } from "react";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import { Form, Button } from "react-bootstrap";
import { useFirestore } from "../Context/FireStoreContext";
import { useAuth } from "../Context/AuthContext";
import { v4 as uuidv4 } from "uuid";

export default function AddingSeller() {
  const { currenUserInfoState } = useCurrenUserInfo();
  const [catagory, setCatagory] = useState("tefilin,תפילין");
  const [itemsinfo, setItemsinfo] = useState(null);
  const [flag, setFlag] = useState(false);
  const levelRef = useRef();
  const checkRef = useRef();
  const scriptRef = useRef();
  const sizeRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const [path, setPath] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const { currentUser } = useAuth();
  const { addFS, updateFS, getDataFS, uploadImagesAndFiles, getImages}=useFirestore();

  
  useEffect(() => {
    getDataFS("Items", "Products").then((data) => {
      setItemsinfo(data);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(catagory);
    const myArray = catagory.split(",");

    setFlag(true);
    const item = {
      name: currenUserInfoState.pName + " " + currenUserInfoState.sName,
      catagory: myArray,
      img: url,
      level: levelRef.current.value,
      check: checkRef.current.value,
      script: scriptRef.current.value,
      size: sizeRef.current.value,
      itemNum: uuidv4().substring(0, 7),
      amount: amountRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      id:currentUser.uid,
    };

    const tempArr = [...itemsinfo.item, item];
    console.log("tempArr:",tempArr);
    updateFS("Items","Products","item",tempArr)
  }

  // useEffect(() => {
  //   if (flag) {addFS("Items", "Products", itemsinfo)
  // }
  // }, [itemsinfo]);

  useEffect(() => {
    if (path !== "") {
      console.log(path);
      const uploadTask = uploadImagesAndFiles(path, image);
      uploadTask.then(() => {
        console.log("upload successful");
        fetchingImg();
      });
    }
  }, [path]);

  function fetchingImg() {
    {
      console.log(getImages(path));
      getImages(path).then((res) => {
        setUrl(res);
      });
    }
  }

  return (
    <div dir="rtl" className="w-100">
      <div className="w-25 m-5 border rounded">
        <h3>העלאת מוצרי סת"ם למכירה</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Select
            className="w-50"
            onChange={(e) => setCatagory(e.target.value)}
            aria-label="Default select example"
          >
            <option value={["tefilin","תפילין"]}>תפילין</option>
            <option value={["mezuzot","מזוזות"]}>מזוזות</option>
            <option value={["megilot", "מגילות"]}>מגילות</option>
            <option value={["tora","ספרי תורה"]}>ספרי תורה</option>
          </Form.Select>
          <h3>העלאת תמונה</h3>
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.value);
              setImage(event.target.files[0]);
              setPath(`images/${event.target.files[0].name + uuidv4()}`);
            }}
          />

          <Form.Group id="pname">
            <Form.Label>כתב</Form.Label>
            <Form.Control type="string" ref={scriptRef} required />
          </Form.Group>
          <Form.Group id="pname">
            <Form.Label>עבר הגהה על ידי?</Form.Label>
            <Form.Control type="string" ref={checkRef} required />
          </Form.Group>
          <Form.Group id="pname">
            <Form.Label>רמת הידור</Form.Label>
            <Form.Control type="string" ref={levelRef} required />
          </Form.Group>
          <Form.Group id="pname">
            <Form.Label>גודל</Form.Label>
            <Form.Control type="string" ref={sizeRef} required />
          </Form.Group>

          <Form.Group id="pname">
            <Form.Label>כמות</Form.Label>
            <Form.Control type="number" ref={amountRef} required />
          </Form.Group>
          <Form.Group id="pname">
            <Form.Label>
              {" "}
              כתוב בשפה שלך תיאור על המוצר הנוכחי שיופיע ליד המוצר
            </Form.Label>
            <Form.Control
              as="textarea"
              style={{ height: "150px" }}
              type="string"
              ref={descriptionRef}
              required
            />
          </Form.Group>
          <Form.Group id="pname">
            <Form.Label>מחיר בשקלים</Form.Label>
            <Form.Control type="number" ref={priceRef} required />
          </Form.Group>
          <Button className="w-100 mt-5" type="submit">
            העלה
          </Button>
        </Form>
      </div>
    </div>
  );
}
