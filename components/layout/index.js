import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

import HeaderComponent from "./header";
import FooterComponent from './footer';
import { getResolvedPaths } from '../../helpers/routingPathHelper';
import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

export default function LayoutWrapper(props) {

    const { router } = props;
    const resolvedPaths = getResolvedPaths(router);

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
                        {resolvedPaths.length ?
                            resolvedPaths.map((item) => (
                                <Breadcrumb.Item>{item}</Breadcrumb.Item>
                            ))
                            : (<Breadcrumb.Item>Home</Breadcrumb.Item>)
                        }
                    </Breadcrumb>
                    <div className="site-layout-content">{props.children}</div>
                </Content>
                <FooterComponent />
            </Layout>
        </>
    )

};