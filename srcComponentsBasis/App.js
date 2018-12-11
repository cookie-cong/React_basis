// 1、引入react
// 2、通过类构造一个函数并且是继承了父类，其中constructor是ES6对类的默认方法，通过new命令生成对象实例时自动调用该方法
// ，并且该方法是类中必须有的。并且当前生命周期函数可以定义当前组件需要的状态
//    在class方法中，继承是使用extends关键字来实现的，子类必须在constructor()调用super()方法，否则新建实例时会报错，
//    因为子类是没有自己的this对象的，它只能继承来自父类的this对象，然后对其进行加工，而super()就是将父类中的this对象继承给
//    子类，没有super，子类就得不到this对象。
// 3、然后写出一系列需要的状态
// 4、渲染虚拟dom
// 5、编写虚拟dom里相关的方法

import React from 'react'
class App extends React.Component{
    //初始化
    constructor(){
        super();
        this.state={
            message:"czy",
            inputVal:"2345"
        }
        this.handleClick=this.handleClick.bind(this)//this.handleClick是一个函数体
        this.handleChange=this.handleChange.bind(this)
    }
    //渲染虚拟dom
    render(){
        let {message,inputVal}=this.state  //这里采用了解构赋值，方便高效
        return(
            <div>
                <h2>{message}</h2>   
                <button onClick={this.handleClick}>点击</button>   
                <hr/>    
                <input type="text" value={inputVal} onChange={this.handleChange}/>  
                <p>{inputVal}</p>  
            </div>
        )
    }
    handleChange(e){
        let val = e.target.value;
        this.setState({
            inputVal:val
        })
    }
    handleClick(){
        this.setState({
            message:"嘻嘻"
        })
    }
}
export default App;





























// import React from 'react'
// // import React,{Component}from "react";
// import ReactDOM from 'react-dom'

// console.log(React)


// //先把状态渲染出来
// class App extends React.Component{
//     //构造函数
//     constructor(){
//         super();
//         this.state={
//             message:"czy",
//             inputVal:"123"

            
//         }
//     }
//     //渲染出来
//     render(){
//        return(
//            <div>
//                <h2>{this.state.message}</h2>
//                <button onClick={this.handleClick.bind(this)}>点击</button> 
//                {/* 不叫bind的时候前面的那个this指向的其实是虚拟dom，但是需要改变message的值，message是在实例下的，所以需要让这个
//             this指向实例才能改变message，所以加上bind（this）之后，this就指向了实例App */}
//                <hr/>
//                <input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)}/>
//                 <p>{this.state.inputVal}</p>
//            </div>
//        )
//     }
//     handleChange(e){
//         let val = e.target.value; //这里是虚拟dom，所以要用时间委托
//         this.setState({
//             inputVal:val
//         })
//     }
//     handleClick(){
//         // console.log(this)//此时这个this是undefined，因为这个this指向的是虚拟dom
//         console.log(this)//实例
//         this.setState({//进行的数据的修改，必须得调用方法this.setState进行数据的修改 
//             message:"xxxx"
//         },()=>{
//             console.log(this.state.message)
//         })
//     }
// }
// export default App;//到处模块