import React from 'react'
// import React,{Component}from "react";
import ReactDOM from 'react-dom'

// console.log(React)


//先把状态渲染出来
class App extends React.Component{
    //构造函数
    constructor(){
        super();
        this.state={
            todolist:[],
            inputVal:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        
    }
    //渲染出来
    render(){
        let {todolist,inputVal}=this.state
       return(
           <div>
               <input type="text" value={this.state.inputVal} onChange={ this.handleChange}/>
               <button onClick={this.handleAdd}>添加</button>
               <ul>
                   {
                       todolist.map((item,index)=>{
                           return <li key={index}>
                               {item}
                               <button onClick={this.handleDel.bind(this,index)} >删除</button>
                           </li>
                       })
                   }
               </ul>
           </div>
       )
    }
    handleDel(index){
        let arr = this.state.todolist;
        arr.splice(index,1)
        this.setState({
            todolist:arr
        })
    }
    handleAdd(){
        this.setState({
            todolist:[...this.state.todolist,this.state.inputVal],
            inputVal:""
        })
    }
    handleChange(e){
        let val = e.target.value; //这里是虚拟dom，所以要用时间委托
        this.setState({
            inputVal:val
        })
    }

}
export default App;//导出模块