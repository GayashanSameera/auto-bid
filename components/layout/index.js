import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

import HeaderComponent from "./header";
import FooterComponent from './footer';

import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

export default function LayoutWrapper(props) {

    return (
        <>
            <Layout>
                <HeaderComponent />
                <Content
                    style={{
                        padding: '0 50px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">content{props.children}</div>
                </Content>
                <FooterComponent />
            </Layout>
        </>
    )

};