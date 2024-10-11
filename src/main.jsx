import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp';
import {CounterApp} from './CounterApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title='Messi' subTitle={10}/> */}
        <CounterApp value={29} />
    </React.StrictMode>
)