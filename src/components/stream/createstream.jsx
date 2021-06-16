import React, { Component } from 'react';
import{Field,reduxForm} from 'redux-form';
import {connect} from  'react-redux';
import {CREATESTREAM} from '../../action/index'




class Createstream extends Component {

    renderErrors({error,touched}){
       
        if(touched&&error){
            return(
            <div className="ui error message mt-2 ">
                <div className="header">{error}</div></div>)
        }
    }
   
   renderField=({input,label, meta}) =>{
    const classname= ` field ${meta.error&&meta.touched?'error':''}`
        
       return(
           <div className={classname}>
            <label>{label} </label>
            <input {...input} autoComplete='off'/>
             
          <div>{this.renderErrors(meta)}</div>  
         
           
           </div>
       )
   }
 onsubmit=(formvalues) =>{
       this.props.CREATESTREAM(formvalues)
 }

    render() { 
        
      
        return (

            <form onSubmit={this.props.handleSubmit(this.onsubmit)} className="ui form error" >
              
            <Field name="title" component={this.renderField} label='Enter the Title' />
            <Field name="description"  component={this.renderField} label='Enter the Description' />
            <button className="ui button primary">submit</button>
            </form>
            
         );
    }
}
const validate=(values) =>{
  const  error={}
if(!values.title){
    error.title='must enter title'
}
if(!values.description){
    error.description='must enter discription'
}

return error
}
 
const formWraper= reduxForm({
form:'createStream',

validate
})(Createstream);

export default connect(null,{CREATESTREAM})(formWraper)
