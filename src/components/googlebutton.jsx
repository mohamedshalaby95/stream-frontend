import React, { Component } from 'react';
import {connect}from 'react-redux';
import {SINGIN,SINGOUT} from'../action';


class Googleoauth extends Component {


componentDidMount(){
    window.gapi.load("auth2", () => {
        console.log(process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID)
        window.gapi.auth2
          .init({
            client_id: process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID,
            scope: "email",
          }) .then(() => {
            
            this.auth = window.gapi.auth2.getAuthInstance()
            this.onAuthChange(this.auth.isSignedIn.get())

          
            this.auth.isSignedIn.listen(this.onAuthChange)
          })
        })
       
}
   onAuthChange=(isSignedIn) =>{
  
       if( isSignedIn){
           this.props.SINGIN(this.auth.currentUser.get().getId())
       }else{
           this.props.SINGOUT()
       }
    
   }
   onSignIn=()=>{
    this.auth.signIn()
   }
   onSignOUT=()=>{
    this.auth.signOut()
   }
    
   renderButton(){
       if(this.props.isSignedIn===null){
           return null
       }
     
    if(this.props.isSignedIn===false){
     
        return ( <div onClick={this.onSignIn}> 
        
            <button className="ui red google button">
            <i className="google icon" />
             SING IN
            </button>
            
            </div> )

    }
   return(
    <div onClick={this.onSignOUT}> 
  
    <button className="ui red google button">
    <i className="google icon" />
     SING OUT
    </button>
    
    </div>
   )
   }
    render() { 
        return(
      <React.Fragment>
          {this.renderButton()}
      </React.Fragment>
    
    )
        }
       
}
const   mapStateToProps= (state) =>{
  
    return({isSignedIn:state.authReducer.isSingIN})
} 

 
export default connect(mapStateToProps,{SINGIN,SINGOUT}) (Googleoauth);