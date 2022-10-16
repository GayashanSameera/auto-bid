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
                <div className={`site-layout-content ${session ? `extra-margin` : null}`}>{props.children}</div>
                <FooterComponent />
            </Layout>
        </>
    )

};