import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Thanos from './components/thanos';

const App = () => {
  return(
    <BrowserRouter>
    <div>
      <Route path="/thanos" component={Thanos} />
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
