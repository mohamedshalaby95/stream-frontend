import React, { Component } from 'react';
import{Field,reduxForm} from 'redux-form';
import {connect} from  'react-redux';

import {CREATESTREAM} from '../../action/index';

import  FormStream from './formstream'




class Createstream extends Component {

  
   

 onsubmit=(formvalues) =>{
       this.props.CREATESTREAM(formvalues)
 }

    render() { 
        
      
        return (

         <div>
             <h3 className="Header mt-3 mb-3">Create Stream</h3>
             <FormStream onSubmit={this.onsubmit} />

         </div>
            
         );
    }
}

 


export default connect(null,{CREATESTREAM})(Createstream )
