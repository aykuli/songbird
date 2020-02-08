import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/app';

import birdsData from './dataBase/birdsData';

ReactDOM.render(<App data={birdsData}/>, document.getElementById('root'));