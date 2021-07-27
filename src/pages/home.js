import React, { Component } from "react";
import Header from "../components/header.js";
import { Carousel } from 'antd';
export default class Home extends Component{
   
    render () {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
            <div>
                <Header></Header>
                <Carousel autoplay >
                <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>

        )
    }
}