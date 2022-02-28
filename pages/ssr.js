//practice and remeber about side serving rendering
//is very well because is page lot fast
// when a page have lot acess is better way to working is side serving rendering
import Link from "next/link"


const Ssr = (props) =>{
 
  return (
      <>
      <h1>Side serving rendering</h1>
      
      <pre> {JSON.stringify(props, null, 2)}  </pre>
      
      <Link href='/'>
      <a>Volta página principal</a>
      </Link> 

      </>
  )
}




// i have always remeber that serve to adding data in dashboards!!!

export async function getServerSideProps () {
    return {
        props:{
             data: new Date().getTime(),
             nome:'Felipe programer martins 18'
        }
    }
}


export default Ssr