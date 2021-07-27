import React, { Component } from 'react';
 /**
  * 类组件 无论使用函数还是类来声明一个组件，它决不能修改自己的props
  * 所有的react组件都必须是纯函数，并且禁止修改其自身props
  * react是单向数据流，父组件改变了属性，那么子组件视图也会更新
  * 属性props是外界传递过来的，状态state是组件本身的，状态可以在组件中任意修改
  * 组件的属性和状态改变都会更新视图
  * 一个类组件必须包含render(),并且return只能返回一个父元素
  * 类组件 有this、有生命周期、有state
  *  **/ 
class Table extends Component{
    render () {
        const characterData = this.props
        return (
            <table>
                <TableHeader ></TableHeader>
                <TBody characterData= { characterData } ></TBody>
            </table>
         )
     }
}
 

/**
 * 函数组件接收一个单一的props对象并返回一个react元素
 *函数组件 无this 无生命周期、无state
 * **/ 
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>name</th>
                <th>job</th>
            </tr>
        </thead>
    )
}
const TBody = (props) => {
    console.log(39, props.characterData.charactorData);
    const rows = props.characterData.charactorData.map((row, index) => {
        return (
            <tr key={ index }>
                <td>{ row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={ () => props.characterData.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    // 如果return 包含在一行中， 则不需要括号， 类组件同函数组件
    return  <tbody>{ rows }</tbody>
}
export default Table;