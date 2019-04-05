import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import TareasModel from './TareasModel';

var model = new TareasModel('react-tareas');

ReactDOM.render(<App model={model} />, document.getElementById('root'));
