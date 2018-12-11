import React from 'react'
import ReactDOM from 'react-dom'


//v-text
// let message = "蜡笔小柯南"
// let dom = <h1>{message}</h1>

//v-html
// let p = <p>123</p>
// let dom = <h1>{p}</h1>

//v-if  v-show
let flag = true;
let message = "蜡笔小柯南"
// let dom = <h1 style={{display:flag?'block':'none'}}>{message}</h1>//v-show
let dom = flag?<h1>{message}</h1>:"" //v-if



ReactDOM.render(
    dom,//需要渲染的dom（虚拟）结构
    document.querySelector("#app"),//将dom结构挂载到指定的位置
    ()=>{//成功回调函数
        console.log("渲染成功")
    }
)