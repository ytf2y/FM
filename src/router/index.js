/**
 * Created by apple on 2019/9/7.
 */

import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';

import React,{Component} from 'react';

import Home from '../components/Home/Home'
import Detail from '../components/Detail/Detail'
import Shoucang from '../components/Shoucang/Shoucang'

class MyRouter extends Component{
    constructor(){
        super();

    }
    render(){
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/shoucang" component={Shoucang}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        )
    }
}

export default MyRouter;

