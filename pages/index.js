import {React, useEffect, useState } from "react"


const Home = () =>{
    
    const [date, setdata] = useState(0)

    const Increased = () => {
        setdata(date+1)
    }

    return <> 
    <h1>Hi there practice little bit about next.js</h1>
    
     <p> create another thing with react, working with usestate and useEffect</p>

      
      {date}
     <button onClick={Increased}>+</button>
    
    </>
}


export default Home