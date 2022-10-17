import React from 'react';
import Link from "next/link";

import styles from "./footer.module.css";

const FooterComponent = (props) => {
    return (
        <footer className={`${styles.footer} ${styles.is_common}`} >
            <div className={`${styles.footer} ${styles.lightgrey}`} >
                <div className={styles.page_padding}>
                    <div className={styles.container_large}>
                        <div className={styles.padding_vertical}>
                            <div className={styles.package_component}>
                                <div className={`${styles.w_layout_grid} ${styles.grid_3_column} ${styles.is_footer_item}`}>
                                    <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_footer_item}`} >
                                        <div className={styles.footer_link} >
                                            <Link href="/home">
                                                <span className={`${styles.text_size_medium} ${styles.text_weight_medium} ${styles.margin_bottom} ${styles.margin_xsmall} ${styles.is_hover}`} >Home</span>
                                            </Link>
                                            <Link href="/pricing">
                                                <span className={`${styles.text_size_medium} ${styles.text_weight_medium} ${styles.margin_bottom} ${styles.margin_xsmall} ${styles.is_hover}`}>Pricing</span>
                                            </Link>
                                            <Link href="/about">
                                                <span className={`${styles.text_size_medium} ${styles.text_weight_medium} ${styles.margin_bottom} ${styles.margin_xsmall} ${styles.is_hover}`}>About</span>
                                            </Link>
                                            <Link href="/contact">
                                                <span className={`${styles.text_size_medium} ${styles.text_weight_medium} ${styles.is_hover}`} >Contact</span>
                                            </Link>
                                        </div>
                                        <div className={styles.footer_link} >
                                            <span className={`${styles.text_size_regular} ${styles.text_weight_normal} ${styles.margin_bottom} ${styles.margin_xsmall} ${styles.is_hover}`} >How to Bid</span>
                                            <span className={`${styles.text_size_regular} ${styles.text_weight_normal} ${styles.margin_bottom} ${styles.margin_xsmall} ${styles.is_hover}`}>Auction Sheet Guide</span>
                                            <span className={`${styles.text_size_regular} ${styles.text_weight_normal} ${styles.margin_bottom} ${styles.margin_xsmall} ${styles.is_hover}`}>Register</span>
                                        </div>
                                    </div>
                                    <div >
                                        <p className={`${styles.text_size_regular} ${styles.text_weight_normal} ${styles.margin_right} ${styles.margin_botom}`}>Available on</p>
                                        <span className={`${styles.app_link} ${styles.margin_right} ${styles.margin_small_icon} ${styles.w_inline_block}`}>
                                            <img src="/Image-7.svg" loading="lazy" width="53" alt="" className={styles.app_icon} />
                                        </span>
                                        <span className={`${styles.app_link} ${styles.w_inline_block}`} >
                                            <img src="/Image-8.svg" loading="lazy" width="53" alt="" className={styles.app_icon} />
                                        </span>
                                    </div>
                                    <div >
                                        <p className={`${styles.text_size_regular} ${styles.text_weight_normal} ${styles.margin_right} ${styles.margin_xxxsmall}`}>Follow us</p>
                                        <span className={`${styles.app_link} ${styles.margin_right} ${styles.margin_small} ${styles.is_icon_hover} ${styles.w_inline_block}`} ><img src="/Group-2329.png" loading="lazy" alt="" className="icon-xsmall" /></span>
                                        <span className={`${styles.app_link} ${styles.margin_right} ${styles.margin_small} ${styles.is_icon_hover} ${styles.w_inline_block}`}><img src="/Group-2330.png" loading="lazy" alt="" className="icon-xsmall" /></span>
                                        <span className={`${styles.app_link} ${styles.margin_right} ${styles.margin_small} ${styles.is_icon_hover} ${styles.w_inline_block}`}><img src="/Group-2328.png" loading="lazy" alt="" className="icon-xsmall" /></span>
                                        <span className={`${styles.app_link} ${styles.margin_right} ${styles.margin_small} ${styles.is_last} ${styles.is_icon_hover} ${styles.w_inline_block}`} ><img src="/Group-2331.png" loading="lazy" alt="" className="icon-xsmall" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.footer} ${styles.lightgrey} ${styles.is_footer_bottom}`} >
                <div className={styles.page_padding}>
                    <div className={styles.container_large}>
                        <div className={`${styles.padding_vertical} ${styles.padding_xsmall}`} >
                            <div className={`${styles.package_component} ${styles.is_footer_bottom}`} >
                                <p className={`${styles.text_size_regular} ${styles.text_weight_normal}`} >© 2022 Kobe Motors Japan. All rights reserved.</p>
                                <span className={`${styles.company_link}`} >
                                    <p className={`${styles.text_size_regular} ${styles.text_weight_normal} ${styles.margin_right} ${styles.margin_xxsmall}`} >UI/UX by  </p>
                                    <p className={`${styles.text_size_regular} ${styles.text_weight_bold}`}>LAYOUTindex</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
};

export default FooterComponent;