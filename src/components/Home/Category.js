/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';

import axios from 'axios';

import {NavLink,Route,Redirect} from 'react-router-dom';

import List from './List.js'

class Category extends Component{
    constructor(){
        super();
        this.state = {
            list:[] //保存获取的数据
        };
    }
    handleClick = ()=>{
        
    }
    componentDidMount(){
        axios.get('/books').then((res)=>{
            console.log(res.data);
            //将获取到的数据存入state
            this.setState({
                list: res.data.list
            })

            //注意: setState是个合并操作.
        })
    }
    render(){
        
        console.log(this.state.list);

        return (
            <div className="category-list">
                {/*渲染分类导航*/}
                <div className="nav">
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <NavLink key={index} to={{pathname:`/home/category/${index}`}}>{item.navTitle}</NavLink>
                            )
                        })
                    }
                </div>

                <Route path="/home/category/:index" component={List}></Route>
                <Redirect to="/home/category/0"></Redirect>
            </div>
        )
    }
}

export default Category;
