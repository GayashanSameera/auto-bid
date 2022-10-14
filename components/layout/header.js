import React from 'react';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Layout, Menu, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import './header.module.css';

import { LoginModal } from '../modals/loginModal';
import {
    requestAuthentication,
    authenticationSuccess,
    authenticationFailed,
    requestLogedOut,
    requestLogedOutSuccess,
    logoutFailed
} from '../../sclices/userSlice';

const { Header } = Layout;

export default function HeaderComponent(props) {
    const [isLoginModalOpen, LoginModalOpenStateChange] = useState(false);

    const dispatch = useDispatch();

    const requestVerify = (data) => {
        dispatch(requestAuthentication(data));
    }

    const clickOnLogin = (event) => {
        LoginModalOpenStateChange(!isLoginModalOpen)
    }

    const closeLoginModal = () => {
        LoginModalOpenStateChange(false)
    }

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
                    <Menu.Item key={"5"} className="menu-item"><Link href="/help"><a>Help</a></Link></Menu.Item>
                    <Menu.Item key={"6"} disabled={true} className="menu-item">
                        <Button type="primary" shape="round" onClick={() => { clickOnLogin(true) }} >
                            Login
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>
            <LoginModal show={isLoginModalOpen} closeLoginModal={closeLoginModal} requestVerify={requestVerify} />
        </Header>
    );
}