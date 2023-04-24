import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { useCurrenUserInfo } from './Context/CurrenUserInfoContext';

export default function Whatsapp() {
	const { currenUserInfoState, setCurrenUserInfoState } = useCurrenUserInfo();

  return (
    <div dir='rtl'>
<WhatsAppWidget 

			phoneNo="+972586770870"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			messageBox={false}
			messageBoxTxt="שלום! הגעתי מהאתר אני מעוניין לקבל פרטים על.... "
			iconSize="40"
			iconColor="white"
			iconBgColor="green"
			headerIcon="https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png"
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="tomato"
			headerTitle="שירות לקוחות"
			headerCaption="מחובר"
			bodyBgColor="#bbb"
			chatPersonName="תמיכה"
			chatMessage={<>שלום 👋 <br /> {currenUserInfoState?.pName}<br /> במה אוכל לעזור ?</>}
			footerBgColor="#999"
			placeholder="כתוב לנו.."
			btnBgColor="yellow"
			btnTxt="התחל שיחה"
			btnTxtColor="black"
		/> </div> )
}
