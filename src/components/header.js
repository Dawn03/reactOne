import React, { Component } from "react";
import "@styles/headerAndFooter.scss";
import "@styles/common.scss";
import { Input, Space } from 'antd';
import logoImg from "@images/pic/yishixuelogo.png"
const { Search } = Input;
export default class PageHeader extends Component{
    state = {
        navList: [
            {
                name: "首页",
                id: "sy",
            },
            {
                name: "课程中心",
                id: "kczx",
            },
            {
                name: "师资介绍",
                id: "szjs",
            },{
                name: "下载app",
                id: "xz",
            }
        ]
    }
    onSearch = () => {
        console.log(1)
    }
    render () {
        const item = this.state.navList.map((item, index) => {
            return <li className="nav_li" key={item.id}>{ item.name}</li>
        })
        return (
            <div className="headerBox">
                <div className="content flex_b item_c">
                    <div className="logo_box">
                        <img className="img" src={logoImg} alt="logo" />
                    </div>
                    <div className="header_middle flex_b">
                        <ul className="nav_ul flex_a"> {item} </ul>
                        <div >
                            <Space direction="vertical">
                                <Search placeholder="请输入课程" onSearch={this.onSearch} enterButton />
                            </Space>
                        </div>
                    </div>
                    <div className="header_login_box tr">
                        <span className="not_login">登录</span>
                    </div>
                </div>
            </div>
        )
    }
}
