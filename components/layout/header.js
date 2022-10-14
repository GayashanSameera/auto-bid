import Link from "next/link";
import React from 'react';
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;
import './header.module.css';

export default function HeaderComponent(props) {
    return (
        <Header className="clearfix">
            <div className="logo"></div>
            <div className="Header-content">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}

                >
                    <Menu.Item key={"1"}>item 1</Menu.Item>
                    <Menu.Item key={"2"}>item 2</Menu.Item>
                    <Menu.Item key={"3"}>item 3</Menu.Item>
                    <Menu.Item key={"4"}>item 4</Menu.Item>
                    <Menu.Item key={"5"} disabled={true}>
                        <Button type="primary" shape="round" onClick={() => { console.log("object"); }} >
                            Download
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>

        </Header>
    );
}