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
    <section className="w-full flex justify-center items-center p-4">
      <section className="w-full border-4 grid grid-cols-2">
        {data && <div className="w-full">
          <img className="max-md:hidden" src={data.results[0].picture.large} alt="" />
          <img className="max-md:block hidden" src={data.results[0].picture.medium} alt="" />
        </div>}
        <div className="w-full grid grid-cols-1">
          <div></div>
        </div>
      </section>
    </section>
  )
}