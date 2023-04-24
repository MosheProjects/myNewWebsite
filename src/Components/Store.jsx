import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFirestore } from "../Context/FireStoreContext";
import ThreeDots from './ThreeDots';
import { listAll } from 'firebase/storage';

export default function() {

const {getDataFS,getImages ,listRef} = useFirestore();
    const {product}=useParams();
    const [data,setData]=useState();
    const [url,setUrl]=useState(null);
const [list,setList]=useState();

    useEffect(()=>{
      getDataFS("Items","Products")
      .then((data)=>{
       setData(data.item);
       console.log(data);
      }) 
    },[])







  return (
    <div dir='rtl' className='d-flex mt-4 gap-4 flex-wrap justify-content-center'>
        {
       data? data.filter(type=>type.catagory[0]===product).map((item)=>{
                return(
                <Card style={{ width: '22rem' }}>
    <Card.Img  style={{height:'230px'}} variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.catagory[1]} </Card.Title>
      <Card.Text>
      <span style={{fontWeight:'bold'}}> שם הסופר:</span>{item.name}
        <br/>
        <span style={{fontWeight:'bold'}}>   כתב:</span>{item.script}
        <br/>
        <span style={{fontWeight:'bold'}}>  גודל:</span>{item.size}
        <br/>
        <span style={{fontWeight:'bold'}}> רמת הידור:</span>{item.level}
        <br/>
        <span style={{fontWeight:'bold'}}>  הגהה:</span>{item.check}
      </Card.Text>
      <Link to={`/${product}/${item.itemNum}`}><Button variant="primary">לרכישה</Button></Link>
    </Card.Body>
  </Card>)
            })
       :<ThreeDots/>
       
     }
    </div>
  )
}
