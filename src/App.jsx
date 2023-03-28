import { useState,useEffect,useRef } from 'react'
import axios from 'axios';

import Form from './components/Form'
import ProductList from './components/ProductList'

function App() {
  const loading = useRef();
  const [data,setData] = useState(null)
  const [show,setShow] = useState(false)
  const [products,setProducts] = useState([])

  useEffect(() => {
    async function fetchData(data){
      const divElement = loading.current;
      console.log(divElement.innerText);
      loading.current.innerText="Loading"
      const result = await axios.post("https://market-scraper-server.vercel.app/", data);
      if(result.data){
        const response = result.data.array
        setProducts(response);
      }
      loading.current.innerText="Search"
      
    }

    
    if(data){
      fetchData(data)
    }
  }, [data])
  
  return (
    <>
      <Form setData={setData} setShow={setShow} reference={loading}/>
      {show ? (<ProductList products={products}/>):(<></>)}
    </>
  )
}

export default App
