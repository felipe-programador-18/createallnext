import {React, useEffect, useState } from "react"
import useSWR from "swr"
import Link from "next/link"


const Home = () =>{
    
    const {get} = useSWR('https://jsonplaceholder.typicode.com/users')

    const [date, setdata] = useState(0)
    const [count, setcount] = useState(0)

    useEffect(() => {
       setInterval(() => {
           setcount(old => old +1)
       }, 100);
}, [])

    const Increased = () => {
        setdata(date+1)
    }

    return <> 
    <h1>Hi there practice little bit about next.js</h1>
    
     <p> create another thing with react, working with usestate and useEffect {count} </p>

      
      {date}
     <button onClick={Increased}>+</button>
    

     <pre> {JSON.stringify(get)} </pre>
 
     <Link href='/teste'>
     <a>NEVER GIVE UP</a>
     </Link> 


    </>
}


export default Home