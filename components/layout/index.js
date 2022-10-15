import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useEffect, useRef, useState } from "react";

import HeaderComponent from "./header";

import FooterComponent from './footer';
import { validateRoutes } from '../../helpers/routingPathHelper';

import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

export default function LayoutWrapper(props) {

    const { router, resolvedPaths, session } = props;

    useEffect(() => {
        validateRoutes(router, session);
    }, [router.asPath]);

    return (
        <>
            <Layout>
                <HeaderComponent session={session} router={router} />
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
                                <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                            ))
                            : (<Breadcrumb.Item key={'home'}>Home</Breadcrumb.Item>)
                        }
                    </Breadcrumb>
                    <div className="site-layout-content">{props.children}</div>
                </Content>
                <FooterComponent />
            </Layout>
        </>
    )

};