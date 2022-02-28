// Practice about site serving generation

const Newspaper = (props) =>{

    return <>
    
    <h3>Create test about site serving generation</h3>
       
     <pre> {JSON.stringify(props,null, 2)}  </pre>
    </>
}


export async function getServingSideProps(){
   return {
       props: {
           data: new Date().getDay(),
           nome:'Programmer fullstack mobile'
       }
   }
}














export default Newspaper