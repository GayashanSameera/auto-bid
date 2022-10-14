import Link from "next/link";
import React from 'react';
import Image from 'next/image'
import { Layout, Menu, Button } from 'antd';

const { Header } = Layout;
import './header.module.css';

export default function HeaderComponent(props) {
    return (
        <Header className="clearfix">
            <div className="logo"><Image src="/Final-AutoBid-360-Logo.svg" alt="Vercel Logo" width={170} height={70} /></div>
            <div className="Header-content">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}

                >
                    <Menu.Item key={"1"} className="menu-item"><Link href="/"><a>Home</a></Link></Menu.Item>
                    <Menu.Item key={"2"} className="menu-item"><Link href="/pricing"><a>Pricing</a></Link></Menu.Item>
                    <Menu.Item key={"3"} className="menu-item"><Link href="/about"><a>About</a></Link></Menu.Item>
                    <Menu.Item key={"4"} className="menu-item"><Link href="/contact"><a>Contact</a></Link></Menu.Item>
                    <Menu.Item key={"4"} className="menu-item"><Link href="/help"><a>Help</a></Link></Menu.Item>
                    <Menu.Item key={"5"} disabled={true} className="menu-item">
                        <Button type="primary" shape="round" onClick={() => { console.log("object"); }} >
                            Login
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>

        </Header>
    );
}