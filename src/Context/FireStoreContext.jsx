import React, { useState } from "react";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  increment,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { db } from "../firebase";
import { useContext, createContext } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage,colection } from "../firebase";
import {query, where, getDocs } from "firebase/firestore";

const FirestoreContext = createContext();

export function useFirestore() {
  return useContext(FirestoreContext);
}

export function FirestoreProvider({ children }) {
  async function addFS(type, uid, data) {
    await setDoc(doc(db, type, uid), data).then((data) =>
      console.log("data was uploded sucsesfully", data)
    );
  }
  async function addFsForum(uid, data) {
    return await setDoc(doc(db, "Forum", uid), data);
  }

  async function getWholeCollection(type,field,value) {

    const q = query(collection(db, type), where(field, "==", value));
    
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
   return querySnapshot;
    
  }

  async function updateFS(type, uid, field, value) {
    const UserRef = doc(db, type, uid);
    await updateDoc(UserRef, {
      [field]: value,
    });
  }

  async function deleteFS(uid) {
    await deleteDoc(doc(db, "Users", uid));
  }

  async function getDataFS(type, uid) {
    const docRef = doc(db, type, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  }
  async function getDataFsForum(uid) {
    const docRef = doc(db, "Forum", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  // 'file' comes from the Blob or File API
  function uploadImagesAndFiles(path, file) {
    const storageRef = ref(storage, path);

    return uploadBytes(storageRef, file);
  }

  function getImages(file) {
    const imageRef = ref(storage, file);
    return getDownloadURL(imageRef);
  }

  function listRef(fileRoot) {
    return ref(storage, fileRoot);
  }

  const value = {
    addFS,
    updateFS,
    deleteFS,
    getDataFS,
    addFsForum,
    getDataFsForum,
    uploadImagesAndFiles,
    getImages,
    listRef,
    getWholeCollection,
  };
  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}
