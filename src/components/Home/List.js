/**
 * Created by apple on 2019/9/7.
 */

import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class List extends Component{
    constructor(){
        super();
        this.state = {
			list:[]
        };
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

        //获取路由跳转传递的参数 index,list
        var index = this.props.match.params.index;

        return (
            <div className="list">
                {/*渲染列表*/}
                {
                    this.state.list.length>0&&
                    this.state.list[index].content.map((item,index)=>{
                        return (
                            <Link key={index} to={{pathname:"/detail",state:item}}>
                                <div className="book">
                                    <div className="pic">
                                        <img src={item.pic} alt=""/>
                                    </div>
                                    <div className="text">
                                        <div>{item.title}</div>
                                        <div>{item.desc}</div>
                                        <div>{item.views}万次</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default List;
