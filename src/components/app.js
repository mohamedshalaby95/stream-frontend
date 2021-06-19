import React from 'react';
import {Provider}from 'react-redux';
import { Router,Redirect,Route,Switch} from 'react-router-dom'
import {createStore,applyMiddleware, compose} from 'redux'
import Createstream from './stream/createstream';


import Deletestream from './stream/deletestream';
import Editestream from './stream/editstream';
import Liststream from './stream/liststream';
import Notfound from './stream/notfound'
import reducer from '../reducer/index'
import Header from './header';
import Reduxthunk from 'redux-thunk';
import history from '../history'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,composeEnhancers(applyMiddleware(Reduxthunk)))
const App = () => {
    
       

    return ( 
<Provider store={store}>
  <React.Fragment>
      <div className="container">
      
      <Router history={history}>
      <Header />
         <Switch>
             <Redirect from='/liststream' to='/' />
       < Route path='/' exact component={Liststream} / >
       < Route path='/stream/new' component={Createstream} / >
      

       < Route path='/stream/delete/:id' component={Deletestream} / >
       < Route path='/stream/edit/:id' component={Editestream} / >
       <Route path='/notfound'  component={Notfound}/>
       <Redirect to="/notfound"  />
           
       </Switch>
    </Router>
    </div>
  </React.Fragment>


</Provider>


     );
}
 
export default App;