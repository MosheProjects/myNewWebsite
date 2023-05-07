import React, { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./styles/homepage.css";

function Message() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, [20000]);

  const handleClick = () => {
    setShowMessage(false);
  };

  if (showMessage) {
    return (
      <div className="message-popover">
        <button className="exit-button" onClick={handleClick}>
          X
        </button>

        <div className="special-order-message">
          <div className="ad-banner">
            <h3>לא מוצא את מה שחיפשת?</h3>
            <p>זקוק למוצרי סת"ם שלא מופיעים כרגע באתר או לכמות יותר גדולה ? </p>
          </div>
          <div className="contact-options">
            <span className="mb-3 ">צור קשר</span>

            <a href="tel:+972586770870">
              <FaPhone /> 0586-770-870
            </a>
            <a href="https://wa.me/+972586770870">
              <FaWhatsapp /> 0586-770-870
            </a>
            <a href="mailto:sofraistam@gmail.com">
              <FaEnvelope /> sofraistam@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default Message;
