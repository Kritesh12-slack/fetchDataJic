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
    <section className="w-full h-screen flex justify-center items-center p-4">
      <section className="w-full border-4 grid grid-cols-2 p-4">
        {data && <div className="w-full flex justify-center">
          <img className="max-md:hidden" src={data.results[0].picture.large} alt="" />
          <img className="max-md:block hidden" src={data.results[0].picture.medium} alt="" />
        </div>}
        {data && <div className="w-full flex flex-col gap-2">
          <div className="flex gap-2"><div>{data.results[0].name.first}</div>
          <div>{data.results[0].name.last}</div></div>
          <div>{data.results[0].dob.age}</div>
          <div>{data.results[0].phone}</div>
        </div>}
      </section>
    </section>
  )
}