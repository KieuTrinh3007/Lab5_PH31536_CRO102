// App.js
import React from 'react';
import { Provider } from 'react-redux';

// import store from './bai1/store';
// import ChupAnh from './bai1/view';

import store from './bai2/store';
import ChonAnh from './bai2/view';

const App = () => {
  return (
    // <Provider store={store}>
    //   <ChupAnh /> 
    // </Provider>

    <Provider store={store}>
    <ChonAnh />
  </Provider>
  );
};

export default App;
