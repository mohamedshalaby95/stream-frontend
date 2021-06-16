import {createstream,editstream,deletestream,fetchstream,fetchstreams} from '../action/type'
import _ from 'lodash'

export const reducerstreams= (state={},action)=>{

    switch(action.type){

      case createstream:
      return ({...state,[action.payload.id]:action.id})
      case editstream:
        return ({...state,[action.payload.id]:action.id})
       case fetchstream:
            return ({...state,[action.payload.id]:action.id})
            case fetchstreams:
                return {...state,..._.mapKeys(action.payload,'_id')}

         case deletestream:
         return (_.omit(state,action.payload))     


    
       default:return state
    }


}