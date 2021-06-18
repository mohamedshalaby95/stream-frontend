import {createstream,editstream,deletestream,fetchstream,fetchstreams} from '../action/type'
import _ from 'lodash'

export const reducerstreams= (state={},action)=>{

    switch(action.type){

      case createstream:
      return ({...state,[action.payload._id]:action.payload})
      case editstream:
        return ({...state,[action.payload._id]:action.payload})
       case fetchstream:
            return ({...state,[action.payload._id]:action.payload})
            case fetchstreams:
                return {...state,..._.mapKeys(action.payload,'_id')}

         case deletestream:
         return (_.omit(state,action.payload))     


    
       default:return state
    }


}