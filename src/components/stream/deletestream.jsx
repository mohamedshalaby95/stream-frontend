import Model from '../model'
import React from 'react';
import { connect } from 'react-redux';
import { FETCHSTREAM, DELETESTREAM } from '../../action/index';
import { Link } from 'react-router-dom'

import history from '../../history'

class DeleteStream extends React.Component {
     componentDidMount() {
          this.props.FETCHSTREAM(this.props.match.params.id)
     }

     rendercontent = () => {
          if (this.props.stream) {
               return (`Are you sure to delete this stream ${this.props.stream.title}`)
          }
          else {
               return (`Are you sure to delete this stream`)
          }
     }

     renderaction = () => {
          return (
               <>
                    <div onClick={() => {
                         this.props.DELETESTREAM(this.props.match.params.id)
                    }} className="ui negative button">Delete</div>

                    <div onClick={() => { history.push('/') }} className="ui cancel button">Cancel</div>
               </>
          )
     }

     render() {

          return (
               <div>

                    <Model


                         title={this.rendercontent()}
                         action={this.renderaction()}


                    />
               </div>
          );
     }
}
const mapStateToProps = (state, ownProps) => {
     return ({ stream: state.streams[ownProps.match.params.id] })
}

export default connect(mapStateToProps, { FETCHSTREAM, DELETESTREAM })(DeleteStream);