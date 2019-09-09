/**
 * Created by apple on 2019/9/7.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
class My extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{

    }
    render(){

        console.log(this.props.shoucang_list);

        return (
            <div className="box">
                My组件
            </div>
        )
    }
}

var newMy = connect(
    (state)=>{
        return {
            shoucang_list: state.shoucang_list
        }
    },
    (dispatch)=>{
        return {

        }
    }
)( My );

export default newMy;