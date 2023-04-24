import React from 'react'
import Popover from 'react-bootstrap/Popover';
import {Row,Col} from 'react-bootstrap'
export default function () {
  return (
    <div className='container' dir='rtl'>
        <h1>מי אנחנו?</h1>
         <h3>
            המטרה שלנו היא להנגיש לכולם את היכולת לבחור את המזוזה הכי מהודרת בלי מתווכים, בהרבה מקומות לצערינו לא יודעים אליבא דאמת מה קונים,פה ישנה היכולת לדעת ביתר דיוק מה קונים,ואצל מי,ועד כמה אפשר לסמוך על הסופר.
         </h3>
 <div className='d-flex gap-5 justify-content-center mt-5'>
 <Row>

 <Col xs={12} md={6} lg={4} className='col'>

<div>


<Popover id={'popover-positioned-top'}>
              <Popover.Header as="h3">{'הרבי מליובאוויטש'}</Popover.Header>
              <Popover.Body>
              להשתדל שלכל חדר בבית יהודי תהיה מזוזה כשרה, השומרת את כל מי שנמצא בבית, ומגינה על היהודי בכל מקום שהוא הולך ונמצא, כפי ההבטחה הכתובה בתהלים "ה' ישמור צאתך ובואך מעתה ועד עולם".
שמירה והצלה
              </Popover.Body>
            </Popover>

           
            <img className="rounded-circle float-right mt-3" style={{height:'180px'}} src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.6435-9/161814132_128148425981654_3368710449173263359_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K-on8Kf4AlgAX_SHXU_&_nc_ht=scontent.ftlv1-1.fna&oh=00_AfDIxb24SsllwLKOsLf5Ln0Ubc8Hl1qTRVftAW5oBgq8Mg&oe=64289446" alt="" />
</div>
</Col>
<Col xs={12} md={6} lg={4} className='col'>

<div>
<Popover id={'popover-positioned-top'}>
              <Popover.Header as="h3">הרבי הריי"ץ</Popover.Header>
              <Popover.Body>
              הרבי הריי”צ ביקש להקים ועד משמרת סת”ם לבדיקת המזוזות. את הבקשה הזאת הפנה הריי”צ אל הרה”ח ר’ שמואל זלמנוב ע”ה וביקשו להכין תוכנית מסודרת להקמתו של ארגון מיוחד שמטרתו תהיה חיזוק והפצת עניין כשרות ובדיקת מזוזות ותפילין.

              </Popover.Body>
            </Popover>

            <img className="rounded-circle float-right mt-3" style={{height:'180px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Frierdiger_Rebbe.tif/lossy-page1-800px-Frierdiger_Rebbe.tif.jpg" alt="" />
</div>
</Col> 
<Col xs={12} md={6} lg={4} className='col'>

<div>
<Popover id={'popover-positioned-top'}>
              <Popover.Header as="h3">שולחן-ערוך אדמו"ר הזקן</Popover.Header>
              <Popover.Body>
              רבים הקשו על מה שעורר הרבי שיש לבדוק תפילין ומזוזות מדי שנה, מהמכילתא, שולחן-ערוך, קיצור שו"ע וכו' שאין צריך לבדוק. אבל:

א. המדובר במקורות הוא כשהכול נעשה מראש כראוי, ולא כבמצב הנוכחי שיש ספק אם בכלל הכניסו פרשיות ומזוזות כשרות או לא.

ב. בזמננו – עיבוד הקלף גרוע יותר מאשר בזמן חז"ל, כך שהדיו והתגים וכו' עמידים פחות, ולכן חובת הבדיקה גדולה יותר.

ג. כשצריכים תוספת ברכה מלמעלה, צריך לבדוק אף שעברה רק שנה מהבדיקה הקודמת, כמבואר במטה אפרים שבחודש אלול בודקים תפילין ומזוזות. כמו-כן הזכיר הרבי את דעת המכילתא, שצריך לבדוק תפילין אחת לי"ב חודש. עד כאן.              </Popover.Body>
            </Popover>

            <img className="rounded-circle float-right mt-3" style={{height:'180px'}} src="https://w2.chabad.org/media/images/686/UWtk6861929.jpg?_i=_nF180D66DDD9FF78CE9758E2E2CE76400" alt="" />
</div>
</Col>
</Row>

</div> 

    </div>
  )
}
