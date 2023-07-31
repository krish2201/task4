import ReactDOM from 'react-dom';
import React from 'react';
import k from './components/image/k.jpg';
import r from './components/image/r.jpg';
import i from './components/image/i.jpg';
import s from './components/image/s.jpg';

import video1 from './videos/V1.webm';
import './App.css';
import styles from './demo.module.css';
class Inlineexample extends React.Component{
    render()
    {
        return(
            <div className='App'>
                      
                <img className='v' src={k}></img><br/>
                <img className='k' src={r}></img><br/>
                <div>
               <video src={video1} width={"500"} height={"500"} controls="controls" autoPlay="true"/>
                </div>
               <div>
                <img className='r' src={i}></img>
                <img className='e' src={s}></img>
               </div>

            </div>
        )
    }
}
ReactDOM.render(<Inlineexample/>,document.getElementById('root'));
