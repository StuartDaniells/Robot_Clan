import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';

// if we do not use default we use {robos}, since we are returning 
// more than one value

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//  REMEMBER components start with caps, and <name /> - "space" necessary
/* We use id = {..} and not id = ".." because we are writing it inside 
   a JSX and need to use the JS expressions(EXPRESSED as JS) so we use
   {} for expressions  */