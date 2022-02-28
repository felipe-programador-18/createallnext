// Practice about site serving generation
import Link from "next/link"

const Newspaper = (props) =>{

    return <>
    
    <h3>Create test about site serving generation</h3>
       
     <pre> {JSON.stringify(props,null, 2)}  </pre>
     
     <Link href='/'>
        <a>Site static generation</a>
        </Link>

    </>
}


export async function getStaticProps(context){
   return {
       props: {
           data: new Date().getTime(),
           nome:'Programmer fullstack mobile'
       }
   }
}



export default Newspaper