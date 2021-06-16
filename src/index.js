import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css'
import App from './components/app';

import ReactDom from 'react-dom';

ReactDom.render(<App />,document.querySelector('#root'))