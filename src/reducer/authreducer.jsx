import {signin,signout} from '../action/type'
 
 const InitalState={
    isSingIN:null,
    userId:null
}

export  const authReducer=(state=InitalState,action)=> {
if(action.type===signin){
    return{...state,isSingIN:true,userId:action.payload}
}
else if(action.type===signout){
    return{...state,isSingIN:false,userId:null}
}
return state;

}