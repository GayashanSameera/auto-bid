import React from 'react';
import { Layout } from 'antd';
import { useEffect, useState } from "react";

import HeaderComponent from "./header";

import FooterComponent from './footer';
import { validateRoutes } from '../../helpers/routingPathHelper';

import 'antd/dist/antd.css';


const LayoutWrapper = (props) => {

    const { router, session } = props;

    const [isMorePadding, setMorePadding] = useState(false);

    useEffect(() => {
        validateRoutes(router, session);
    }, [router.asPath]);

    useEffect(() => {
        if (session) {
            setMorePadding(true);
        } else {
            setMorePadding(false);
        }

    }, [session]);

    return (
        <>
            <Layout>
                <HeaderComponent session={session} router={router} />
                <div className={`site-layout-content ${isMorePadding ? `extra-margin` : null}`}>
                    {props.children}
                </div>
                <FooterComponent />
            </Layout>
        </>
    )

};

export default LayoutWrapper;