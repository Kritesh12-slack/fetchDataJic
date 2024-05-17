import axios from "axios"
import { useEffect, useState } from "react"

export default function App(){
  const [data,setData] = useState(null)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
        if(response){
          setData(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  
  return(
    <>
      <h1 className=" text-2xl">Hello World</h1>
    </>
  )
}