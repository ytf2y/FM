/**
 * Created by apple on 2019/9/7.
 */

var data  = {
    shoucang_list:[]
};

function bookReducer( state = data,action )
{
    switch (action.type)
    {
        case 'SHOUCANG':
            state.shoucang_list.push( action.book );
            return state;

        default :
            return state;

    }
}

export default  bookReducer;