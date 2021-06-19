
import ReactDom from 'react-dom'
import history from '../history'


const Model=(props)=>{
  
return(
ReactDom.createPortal(
  <div onClick={()=>{
  history.push('/')
  }} className="  ">
  <div onClick={(e)=>{

  }} class="ui bg-dark w-100 h-100  modal visible active ">
    <div className="mt-5 "></div>
    

  <div class="header red ui w-25 m-auto centerd  ">DELETE STREAM</div>
  <div class="content w-25 m-auto">
    <p>{props.title}</p>
  </div>
  <div class="actions w-25 m-auto">
   {props.action}
  </div>
</div>
</div>

// {/* <div className=" ui   models visible active">
//   <div className=" ui standard model visible active " >
//     <div className="header ">DELETE STREAM</div>
//   </div>

// </div> */}

  

      
  ,
  document.querySelector('#portol-model') 

)

)
    
}
export default Model;