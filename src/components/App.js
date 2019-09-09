import React,{Component} from 'react';

import MyRouter from '../router'

import './App.css'

import '../mock'

class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="app">
				<MyRouter></MyRouter>
            </div>
        )
    }
}

export default App;

