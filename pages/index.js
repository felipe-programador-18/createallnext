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
    
    <h2>Practice little bit about all structure next!! </h2>
      
      {date}
     <button onClick={Increased}>+</button>
    

     <pre> {JSON.stringify(get)} </pre>
     
     <br/>
     <Link href='/teste'>
     <a>NEVER GIVE UP</a>
     </Link> 
      <br/>
     
     <Link href='/ssr'>
     <a> Pratice SSR </a>
     </Link>
        
       <br/> 
     <Link href='/ssg'>
        <a>Site static generation</a>
        </Link>


    </>
}


export default Home