import {signin,signout,createstream,editstream,deletestream,fetchstream,fetchstreams} from './type';
import streamsApi from'../apis/stream'

 export const SINGIN=(userid) =>{

    return {
    type:signin,
    payload:userid
}
    
}

export const SINGOUT= ()=>{
    return {
        type:signout
    }
}

export const CREATESTREAM=(formvalues)=>

   async (dispath,getState)=>{
       let {userId}=getState().authReducer
       
       if(userId===null){
           userId="null"
       }
       console.log(userId)
         const response=await streamsApi.post('/stream',{...formvalues,userId});
         console.log(response)
         dispath({type:createstream,payload:response.data})
    }


    export const EDITSTREAM=(formvalues,id)=>

    async (dispath)=>{
          const response=await streamsApi.PUT(`/stream/${id}`,formvalues);
          dispath({type:editstream,payload:response.data})
     }
     export const FETCHSTREAM=(id)=>

   async (dispath)=>{
         const response=await streamsApi.get(`/stream/${id}`);
         dispath({type:fetchstream,payload:response.data})
    }

    export const FETCHSTREAMS=()=>

    async (dispath)=>{
          const response=await streamsApi.get(`/stream`);
          dispath({type:fetchstreams,payload:response.data})
     }
    
     export const DELETESTREAM=(id)=>

     async (dispath)=>{
           const response=await streamsApi.delete(`/stream/${id}`);
           dispath({type:deletestream,payload:id})
      }


 


