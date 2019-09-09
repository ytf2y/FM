/**
 * Created by apple on 2019/9/7.
 */

//引入mockjs
import Mock from 'mockjs'
//定义接口
Mock.mock('/books','get',{
    "status":200,
    "list|5":[
        {
            "navTitle|+1":['全部','儿童故事','启蒙课堂','其他','国学经典'],
            "content|5":[
                {
                    "id|+1":1,
                    "title":'@ctitle',
                    "pic":'@image(100x100)',
                    "desc":'@cparagraph(1)',
                    "views|10000-100000":1
                }
            ]
        }
    ]
});

