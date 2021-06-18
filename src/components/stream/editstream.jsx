
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {   FETCHSTREAM} from '../../action/index';
import FormStream from './formstream';
import {EDITSTREAM} from '../../action/index';
import _ from 'lodash'

class Editestream extends Component {
    componentDidMount(){
     
        this.props.FETCHSTREAM(this.props.match.params.id)
    }
   
    onsubmit=(formvalues)=>{
         this.props.EDITSTREAM(formvalues,this.props.match.params.id);
    }
    render() { 
       
        return ( <div>

          <h3 className="header mt-3 mb-3">EDIT STREAM</h3>
          <FormStream initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onsubmit}/>
          
        </div> );
    }
}
const mapStateToProps=(state,ownProps)=>{
 console.log(state.streams[ownProps.match.params.id])
    return({stream:state.streams[ownProps.match.params.id]})
}

 
export default connect(mapStateToProps,{FETCHSTREAM,EDITSTREAM}) (Editestream);