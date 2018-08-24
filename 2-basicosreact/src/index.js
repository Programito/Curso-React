import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Aplicacion from './componentes/Aplicacion';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render( <Aplicacion />, 
        document.getElementById('root'));
registerServiceWorker();
