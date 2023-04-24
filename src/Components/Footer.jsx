import React from 'react'

export default function Footer() {
  return (
    <div dir='rtl'>
<footer className="text-center text-lg-start bg-white text-muted border">


  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>
            מוצרי סת"ם
          </h6>
          <p>
           האתר נועד לתת מענה לאלה שלא מבינים בסת"ם כך שיוכלו לקנות בצורה ישירה מהסופר בלי מתווכים ולבחור מבין עשרות סופרים את המוצר המועדף עליהם
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            מוצרים
          </h6>
          <p>
            <a href="#!" className="text-reset">תפילין</a>
          </p>
          <p>
            <a href="#!" className="text-reset">מזוזות</a>
          </p>
          <p>
            <a href="#!" className="text-reset">מגילות</a>
          </p>
          <p>
            <a href="#!" className="text-reset">ספרי-תורה</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            קיצורי דרך
          </h6>
          <p>
            <a href="#!" className="text-reset">החשבון שלי</a>
          </p>
          <p>
            <a href="#!" className="text-reset">הגדרות</a>
          </p>
          <p>
            <a href="#!" className="text-reset">הזמנות</a>
          </p>
          <p>
            <a href="#!" className="text-reset">יציאה</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">צור קשר</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i>אדמור הרייצ 3 כפר חב"ד , ישראל</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> 058-6-770-870</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> 02-999-5880</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4 d-flex gap-2 justify-content-center" style={{backgroundColor:"black"}}>
    © 2021 כל הזכויות שמורות: 
    <a className="text-reset fw-bold" href="https://shopify.com/">שופיפיי </a>
  </div>
</footer>
    </div>
  )
}
