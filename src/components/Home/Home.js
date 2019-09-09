/**
 * Created by apple on 2019/9/7.
 */

import React,{Component} from 'react';

import My from './My.js'
import Hot from './Hot.js'
import Category from './Category.js'
import Good from './Good.js'

import {NavLink,Route,Redirect} from 'react-router-dom';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            flag : 0
        };
    }
    handleClick = (index)=>{
        this.setState({
            flag: index
        })
    }
    render(){
        return (
            <div className="home-page">
                {/*导航*/}
                {
                    /*
                    * <div className="nav">

                     <NavLink onClick={ ()=>{this.handleClick(0)} } to="/home/my">我的</NavLink>
                     <NavLink onClick={ ()=>{this.handleClick(1)} } to="/home/hot">热门</NavLink>
                     <NavLink onClick={ ()=>{this.handleClick(2)} } to="/home/category">分类</NavLink>
                     <NavLink onClick={ ()=>{this.handleClick(3)} } to="/home/good">精品</NavLink>

                     </div>
                     {
                     this.state.flag == 0 && <My></My>
                     }
                     {
                     this.state.flag == 1 && <Hot></Hot>
                     }
                     {
                     this.state.flag == 2 && <Category></Category>
                     }
                     {
                     this.state.flag == 3 && <Good></Good>
                     }
                    * */
                }

                <div className="nav">
                    <NavLink  to="/home/my">我的</NavLink>
                    <NavLink  to="/home/hot">热门</NavLink>
                    <NavLink to="/home/category">分类</NavLink>
                    <NavLink to="/home/good">精品</NavLink>
                </div>

                <Route path="/home/my" component={My}></Route>
                <Route path="/home/hot" component={Hot}></Route>
                <Route path="/home/category" component={Category}></Route>
                <Route path="/home/good" component={Good}></Route>
                <Redirect to="/home/my"></Redirect>
            </div>
        )
    }
}

export default Home;