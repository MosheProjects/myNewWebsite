import { Button } from "react-bootstrap";
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Product() {

 
  const { item } = useParams();
  console.log(item);
  return (
    <div dir="rtl" className="d-flex flex-column gap-4 w-50 justify-content-center align-items-center border">
      <img className="w-25 h-25" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="מוצר " />
      <div>
        <h2>desription</h2>
      </div>
      <Button className="w-25">הוסף לסל</Button>
      <div className="border bg-info">
        <h3>חוות דעת על הסופר והמוצרים שלו </h3>
        <span className="bg-red">רק קונים מאומתים יורשו לשתף את חוות דעתם</span>
        {feedbacks? feedbacks.map((item) => {
              return <div className="border border-2 rounded mt-3">"{item}"</div>;
            })
          : null}
      </div>
      <div className="d-flex flex-column">
        יש לך שאלות על מוצר זה?
        <Link to={"/contact"}>
          {" "}
          <Button>צור קשר</Button>
        </Link>
      </div>
    </div>
  );
}
