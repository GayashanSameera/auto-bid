import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./header.module.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import { LoginModal } from "../modals/loginModal";
import { requestAuthentication, requestLogedOut } from "../../sclices/userSlice";
import { checkPrivateRoute } from "../../helpers/routingPathHelper";
import { getVerifiedSession } from '../../helpers/sessionHelper';

const HeaderComponent = (props) => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [isToggleOpen, changeToggleOpen] = useState(false);
    const [selectedLanguage, changeSelectedLanguage] = useState("English");
    const [isLoginModalOpen, LoginModalOpenStateChange] = useState(false);
    const [isLogedin, isLogedinChange] = useState(false);

    const isAuthenticating = useSelector((state) => state.user.isAuthenticating);

    useEffect(() => {
        if (!isAuthenticating) {
            LoginModalOpenStateChange(false);
            const session = getVerifiedSession();

            if (!checkPrivateRoute(router) && session) {
                router.push({
                    pathname: "/auction",
                    //query: { component: 'init' }  // we can pass query params by adding this 
                });

            }
        }
    }, [isAuthenticating]);

    useEffect(() => {
        const session = getVerifiedSession();
        if (session) {
            isLogedinChange(true);
        } else {
            isLogedinChange(false);
        }
    }, [getVerifiedSession()]);

    const requestVerify = (data) => {
        const request = {
            ...data,
            //created sample request plz get correct details
            "timestamp": 123456789,
            "api_key": "fd3c38777c17174799e1858f544acd5a15454d77",
            "device_id": "dtE6bQriY07Orx8Qkg50Jv",
            "os": "A",
            "firebase_id": "dtE6bQriY07Orx8Qkg50Jv"
        }
        dispatch(requestAuthentication(request));
    };

    const clickOnLogin = (event) => {
        LoginModalOpenStateChange(!isLoginModalOpen);
    };

    const clickOnLogout = (event) => {
        dispatch(requestLogedOut());
        props.router.replace("/");
    };

    const closeLoginModal = () => {
        LoginModalOpenStateChange(false);
    };

    const languageTogal = () => {
        changeToggleOpen(!isToggleOpen);
    };

    return (
        <div className={styles.pageWrapper}>
            <div className="nav">
                <div
                    data-collapse="medium"
                    data-animation="default"
                    data-duration="200"
                    data-easing="ease-in-out"
                    data-easing2="ease-in-out"
                    className={`${styles.nav_component}  ${styles.w_nav}`}
                >
                    {isLogedin ? (
                        <div className={`${styles.page_padding} ${styles.is_top_nav}`}>
                            <div className={styles.nav_top_content}>
                                <div className={styles.nav_top_link_wrapper}>
                                    <div className={styles.credit_limit_wrapper}>
                                        <p className={styles.credit_limit_text}>Credit Limit</p>
                                        <p className={styles.credit_limit_value}>YEN -1,000,000</p>
                                    </div>
                                    <div className={styles.nav_top_link}>
                                        <Link href="/pricing">
                                            <a className={styles.top_link}>Pricing</a>
                                        </Link>

                                        <div className={styles.separator}></div>
                                        <Link href="/about">
                                            <span className={styles.top_link}>About</span>
                                        </Link>

                                        <div className={styles.separator}></div>
                                        <Link href="/contact">
                                            <span className={styles.top_link}>Contact</span>
                                        </Link>

                                        <div className={styles.separator}></div>
                                        <Link href="/help">
                                            <span className={styles.top_link}>Help</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <div className={styles.page_padding}>
                        <div className={styles.nav_container}>
                            <a href="#" className={`${styles.nav_logo_link}  ${styles.w_nav_brand}`}>
                                <img
                                    src="/Final-AutoBid-360-Logo.svg"
                                    loading="lazy"
                                    alt=""
                                    className={styles.nav_logo}
                                />
                            </a>
                            <nav className={`${styles.nav_menu}  ${styles.w_nav_menu}`}>
                                <div className={styles.nav_link_wrapper}>
                                    <div className={styles.nav_link_list}>
                                        <Link href="/">
                                            <a
                                                className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                            >
                                                Home
                                            </a>
                                        </Link>
                                        {isLogedin ? (
                                            <>
                                                <Link href="/auction">
                                                    <a
                                                        className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                                    >
                                                        Actions
                                                    </a>
                                                </Link>
                                                <Link href="/mybids">
                                                    <a
                                                        className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                                    >
                                                        My Bids
                                                    </a>
                                                </Link>
                                                <Link href="/myorders">
                                                    <a
                                                        className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                                    >
                                                        My Orders
                                                    </a>
                                                </Link>
                                            </>
                                        ) : (
                                                <>
                                                    <Link href="/pricing">
                                                        <a
                                                            className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                                        >
                                                            Pricing
                                                        </a>
                                                    </Link>
                                                    <Link href="/about">
                                                        <a
                                                            className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                                        >
                                                            About
                                                        </a>
                                                    </Link>
                                                    <Link href="/contact">
                                                        <a
                                                            className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                                        >
                                                            Contact
                                                        </a>
                                                    </Link>
                                                </>
                                        )}

                                        <Link href="/help">
                                            <a
                                                className={`${styles.nav_link}  ${styles.isStroke} ${styles.w_nav_link}`}
                                            >
                                                Help
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={`${styles.nav_link_list}  ${styles.is_last}`}>
                                        <div
                                            data-hover="false"
                                            data-delay="0"
                                            className={`${styles.nav_dropdown_2}  ${styles.padding_right} ${styles.padding_small} ${styles.w_dropdown}`}
                                            className="  padding-small w-dropdown"
                                        >
                                            <div
                                                className={`${styles.nav_dropdown_toggle}  ${styles.w_dropdown_toggle}`}
                                            >
                                                <div className={styles.nav_label}> {selectedLanguage} </div>
                                                <div
                                                    className={`${styles.icon_2}  ${styles.w_icon_dropdown_toggle}`}
                                                    onClick={() => {
                                                        languageTogal();
                                                    }}
                                                >
                                                    {isToggleOpen ? <UpOutlined /> : <DownOutlined />}
                                                </div>
                                            </div>
                                            {isToggleOpen ? (
                                                <nav
                                                    className={`${styles.nav_drop_list_lang}  ${styles.w_dropdown_list}`}
                                                >
                                                    <div
                                                        className={`${styles.deopdown_list_wrapper}  ${styles.is_product}`}
                                                    >
                                                        <div
                                                            className={`${styles.deopdown_list_wrap}  ${styles.padding_small} ${styles.is_mobile}`}
                                                        >
                                                            <span
                                                                className={`${styles.margin_bottom}  ${styles.margin_xsmall} ${styles.w_inline_block}`}
                                                            >
                                                                <p
                                                                    className={`${styles.text_size_regular}  ${styles.text_color_white} ${styles.text_weight_normal} ${styles.is_lang}`}
                                                                >
                                                                    English
                                                                </p>
                                                            </span>
                                                            <span
                                                                className={`${styles.margin_bottom}  ${styles.margin_xsmall} ${styles.w_inline_block}`}
                                                            >
                                                                <p
                                                                    className={`${styles.text_size_regular}  ${styles.text_color_white}  ${styles.is_lang}`}
                                                                >
                                                                    Japanese
                                                                </p>
                                                            </span>
                                                            <span
                                                                className={`${styles.margin_bottom}  ${styles.margin_xsmall} ${styles.w_inline_block}`}
                                                            >
                                                                <p
                                                                    className={`${styles.text_size_regular}  ${styles.text_color_white}  ${styles.is_lang}`}
                                                                >
                                                                    Arabic
                                                                </p>
                                                            </span>
                                                            <span className={styles.w_inline_block}>
                                                                <p
                                                                    className={`${styles.text_size_regular}  ${styles.text_color_white}  ${styles.is_lang}`}
                                                                >
                                                                    Spanish
                                                                </p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </nav>
                                            ) : null}
                                        </div>
                                        <span
                                            className={`
                                            ${styles.button_secondary}  
                                        ${styles.is_button_small}  
                                        ${styles.is_button_gold} 
                                        ${styles.is_nev_button} 
                                        ${styles.w_button}`}
                                            onClick={() => {
                                                isLogedin ? clickOnLogout(true) : clickOnLogin(true);
                                            }}
                                        >
                                            {isLogedin ? "Logout" : "Login"}
                                        </span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {isLoginModalOpen && (
                <LoginModal
                    show={isLoginModalOpen}
                    closeLoginModal={closeLoginModal}
                    requestVerify={requestVerify}
                    isAuthenticating={isAuthenticating}
                />
            )}
        </div>
    );
}


export default HeaderComponent;
