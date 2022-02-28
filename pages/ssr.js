//practice and remeber about side serving rendering
//is very well because is page lot fast
// when a page have lot acess is better way to working is side serving rendering

const Ssr = (props) =>{
 
  return (
      <>
      <h1>Side serving rendering</h1>
      
      <pre> {JSON.stringify(props, null, 2)}  </pre>
      
      </>
  )
}



export async function getServerSideProps () {
    return {
        props:{
             data: new Data () .getTime,
             nome:'Felipe programer martins 18'
        }
    }
}


export default Ssr