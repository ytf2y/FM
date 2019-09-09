/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';

import {shoucang} from '../../store/action.js'

import {connect} from 'react-redux';

class Detail extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{

    }
    render(){

        //获取数据
        var item = this.props.location.state;

        return (
            <div className="detail-page">
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

                <div className="btn" onClick={ ()=>{ this.props.shoucang_action(item) } }>收藏</div>
            </div>
        )
    }
}

var newDetail = connect(
    (state)=>{
        return {

        }
    },
    (dispatch)=>{
        return {
            shoucang_action:(book)=>{
                //触发action
                dispatch( shoucang( book ) );
            }
        }
    }
)( Detail );

export default newDetail;