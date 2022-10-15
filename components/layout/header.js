import React from 'react';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Layout, Menu, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';

import './header.module.css';

import { LoginModal } from '../modals/loginModal';
import {
    requestAuthentication,
    requestLogedOut
} from '../../sclices/userSlice';
import { checkPrivateRoute } from '../../helpers/routingPathHelper';

const { Header } = Layout;

export default function HeaderComponent(props) {
    const { session = null } = props;
    const dispatch = useDispatch();
    const router = useRouter();

    const [isLoginModalOpen, LoginModalOpenStateChange] = useState(false);
    const [isLogedin, isLogedinChange] = useState(false);

    const isAuthenticating = useSelector(state => state.user.isAuthenticating);

    useEffect(() => {
        if (!isAuthenticating) {

            LoginModalOpenStateChange(false);
            if (!checkPrivateRoute(router) && !session) {
                router.push("/dashboad");
            }

        }
    }, [isAuthenticating]);

    useEffect(() => {
        if (session) {
            isLogedinChange(true);
        } else {
            isLogedinChange(false);
        }

    }, [session])

    const requestVerify = (data) => {
        dispatch(requestAuthentication(data));
    }

    const clickOnLogin = (event) => {
        LoginModalOpenStateChange(!isLoginModalOpen);
    }

    const clickOnLogout = (event) => {
        dispatch(requestLogedOut());
        props.router.replace('/');
    }

    const closeLoginModal = () => {
        LoginModalOpenStateChange(false);
    }

    return (
        <Header className="clearfix">
            <div className="logo">
                <Image src="/Final-AutoBid-360-Logo.svg" alt="Vercel Logo" width={170} height={70} />
            </div>
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
                    <Menu.Item key={"5"} className="menu-item"><Link href="/help"><a>Help</a></Link></Menu.Item>
                    <Menu.Item key={"6"} disabled={true} className="menu-item">
                        <Button type="primary" shape="round" onClick={() => { isLogedin ? clickOnLogout(true) : clickOnLogin(true) }} >
                            <span>{isLogedin ? 'Log-out' : 'Log-in'}</span>
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>
            {
                isLoginModalOpen && (
                    <LoginModal show={isLoginModalOpen} closeLoginModal={closeLoginModal} requestVerify={requestVerify} isAuthenticating={isAuthenticating} />
                )
            }

        </Header>
    );
}