import React, { Component } from 'react';
import {connect} from'react-redux';
import {FETCHSTREAMS} from'../../action/index'
class Liststream extends Component {
      
componentDidMount(){
    this.props.FETCHSTREAMS()
}

renderadmin(stream){
    
if(stream.userId===this.props.currentUser){
    return(

        <div className=" ui ">
            <button className="ui button primary ui right floated button ">EDIT</button>
            <button className="ui button negative right floated button">DELETE</button>
        </div>
    )
}

}

renderCreateButton({isSignin}){
    if(isSignin===true){
        return(<div><button className=" ui button warning ui right floated button">Create Stream</button></div>)
    }
 

}
renderview(){
  return( this.props.streams.map((stream)=>{
      return(
<div>
<div className="item" key={stream._id}>
   {this.renderadmin(stream)}
  <i className=" large middle aligned icon camera"></i>
  <div className="content">
      
      {stream.title}
  <div className="description">{stream.description}</div>

  </div>
  
 
</div>

</div>
      )
    })) 


}

    render() {
 
       
        return ( <div>
            
            <h2>Streams</h2>
             <div  className=" ui celled list" >{this.renderview()}</div> 
             <div className="right floated">{this.renderCreateButton(this.props)}</div>
        </div> );
    }
}
const mapStateToProps=(state)=>{
return{streams:Object.values(state.streams),
currentUser:state.authReducer.userId,
isSignin:state.authReducer.isSingIN
}
}
 
export default connect(mapStateToProps,{FETCHSTREAMS})(Liststream);
