import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import First from "./first";
// import Form from "./form";
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// jsx 和JavaScript  很接近，但是有些微的不同之处
/**
 * 1. className 代替 class
 * 2. 属性和方法在jsx中使用驼峰写法， eg: onClick 代替 onclick
 * 3. 自动关闭标签必须以斜杠结尾， eg: <img />
 *
 */
// const heading = <h1 className=""> Hello React</h1>; // jsx
// const heading1 = React.createElement('h1', { classname: "xxclassname" }, 'hello react');// no jsx
// const name = "Taina";
// const heading2 = <h1> hello, {name} </h1>;
// class App extends React.Component {
//   state = {
//     charactorData: [
//       {
//         name: "Charlie",
//         job: "Janitor",
//       },
//       {
//         name: "Mac",
//         job: "Bouncer",
//       },
//       {
//         name: "Dee",
//         job: "Aspring actreee",
//       },
//     ],
//   };
//   removeCharacter = (index) => {
//     const { charactorData } = this.state;
//     this.setState({
//       charactorData: charactorData.filter((character, i) => {
//         return i !== index;
//       }),
//     });
//   };
//   handleSubmit = (chareacter) => {
//     this.setState({
//       charactorData: [...this.state.charactorData,chareacter]
//     })
//   }
//   render () {
//     const { charactorData } = this.state;
//     return (
//       <div className="name1">
//         {heading2}
//         <First
//           charactorData={charactorData}
//           removeCharacter={this.removeCharacter}
//         ></First>
//         <Form handleSubmit={ this.handleSubmit} ></Form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
