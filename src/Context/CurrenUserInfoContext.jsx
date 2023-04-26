import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import {useFirestore} from './FireStoreContext'

const CurrenUserInfoContext = createContext();

export function CurrenUserInfoProvider({ children }) {
  const [currenUserInfoState, setCurrenUserInfoState] = useState(null);
  const {currentUser}=useAuth();
  const {getDataFS}=useFirestore();

  const value = {
    currenUserInfoState,
    setCurrenUserInfoState,
  };

  useEffect(()=>{
    if(currentUser)
    {
      getDataFS("Customers",currentUser.email)
      .then((data)=>{
        if(data===null)
        {
          getDataFS("Sellers",currentUser.email)
          .then((data)=>{
            setCurrenUserInfoState(data)
          })
        }
        else{
          console.log(data);
          setCurrenUserInfoState(data)
        }
       
      })
    }
    else setCurrenUserInfoState(null)

  },[currentUser])

  return <CurrenUserInfoContext.Provider value={value}>{children}</CurrenUserInfoContext.Provider>;
}

export function useCurrenUserInfo() {
  return useContext(CurrenUserInfoContext);
}