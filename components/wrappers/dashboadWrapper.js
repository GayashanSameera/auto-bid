import Link from "next/link";
import styles from "./dashboadWrapper.module.css";

export default function DashboadWrapper(props) {
    return (
        <>
            <div className={`${styles.section_component} ${styles.is_my_order}`}>
                <div className={styles.max_width_full}>
                    <div className={`${styles.page_padding} ${styles.is_paddinf_left_zero} ${styles.is_mobile}`}>
                        <div className={`${styles.margin_bottom} ${styles.margin_xlarge}`}>
                            <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_my_account}`}>
                                <div className={styles.summary_left}>
                                    <div className={styles.summary_card_wrapper}>
                                        <div className={`${styles.margin_bottom} ${styles.margin_small}`}>
                                            <h1>Summary</h1>
                                        </div>
                                        <div className={styles.summary_details_wrapper}>
                                            <div className={`${styles.grid_row} ${styles.is_summary_grid_container}`}>
                                                <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_summary}`}>
                                                    <div>
                                                        <p className={styles.summary_title}>Credit Limit:</p>
                                                    </div>
                                                    <div
                                                        className={styles.summary_content_right}
                                                    >
                                                        <p className={`${styles.summary_value} ${styles.is_red}`} >YEN -1,000,000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.grid_row} ${styles.is_summary_grid_container}`}>
                                                <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_summary}`}>
                                                    <div>
                                                        <p className={styles.summary_title}>Outstanding:</p>
                                                    </div>
                                                    <div

                                                        className={styles.summary_content_right}
                                                    >
                                                        <p className={styles.summary_value}>YEN 2,348,000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.grid_row} ${styles.is_summary_grid_container}`}>
                                                <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_summary}`}>
                                                    <div


                                                    >
                                                        <p className={styles.summary_title}>Action Deposit:</p>
                                                    </div>
                                                    <div

                                                        className={styles.summary_content_right}
                                                    >
                                                        <p className={styles.summary_value}>$ 1,000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.grid_row} ${styles.is_summary_grid_container}`}>
                                                <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_summary}`}>
                                                    <div


                                                    >
                                                        <p className={styles.summary_title}>Bids won today</p>
                                                    </div>
                                                    <div

                                                        className={styles.summary_content_right}
                                                    >
                                                        <p className={styles.summary_value}>3</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`${styles.grid_row} ${styles.is_summary_grid_container} ${styles.is_last}`}
                                            >
                                                <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_summary}`}>
                                                    <div


                                                    >
                                                        <p className={styles.summary_title}>Bids lost today</p>
                                                    </div>
                                                    <div

                                                        className={styles.summary_content_right}
                                                    >
                                                        <p className={styles.summary_value}>2</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.links_card_wrapper} ${styles.is_middle}`}>
                                        <div className={`${styles.margin_bottom} ${styles.margin_small}`}>
                                            <h1>My Account</h1>
                                        </div>
                                        <div className={styles.my_account_link_wrap}>
                                            <div className={styles.my_account_lick_wrapper}>
                                                <Link href="/dashboad/update-information">
                                                <a className={`${styles.link_wrapper} ${styles.w_inline_block}`}>
                                                    <p className={styles.my_account_link}>Update Information</p>
                                                </a>
                                                </Link>
                                            </div>
                                            <div className={styles.my_account_lick_wrapper}>
                                                <Link href="/dashboad/outstanding-statement">
                                                <a className={`${styles.link_wrapper} ${styles.w_inline_block}`}>
                                                    <p className={styles.my_account_link}>Outstanding Statement</p>
                                                </a>
                                                </Link>
                                            </div>
                                            <div className={styles.my_account_lick_wrapper}>
                                                <a className={`${styles.link_wrapper} ${styles.w_inline_block}`}>
                                                    <p className={styles.my_account_link}>Account Statement</p>
                                                </a>
                                            </div>
                                            <div className={`${styles.my_account_lick_wrapper} ${styles.is_last}`}>
                                                <a className={`${styles.link_wrapper} ${styles.w_inline_block}`}>
                                                    <p className={styles.my_account_link}>Logout</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.links_card_wrapper} ${styles.is_bottom}`}>
                                        <div className={`${styles.margin_bottom} ${styles.margin_small}`}>
                                            <h1>Auctions</h1>
                                        </div>
                                        <div className={styles.my_account_link_wrap}>
                                            <div className={styles.my_account_lick_wrapper}>
                                                <a className={`${styles.link_wrapper} ${styles.w_inline_block}`}>
                                                    <p className={styles.my_account_link}>My Bids</p>
                                                </a>
                                            </div>
                                            <div className={styles.my_account_lick_wrapper}>
                                                <a className={`${styles.link_wrapper} ${styles.w_inline_block}`}>
                                                    <p className={styles.my_account_link}>Saved Searches</p>
                                                </a>
                                            </div>
                                            <div className={`${styles.my_account_lick_wrapper} ${styles.is_last}`}>
                                                <a className={`${styles.link_wrapper} ${styles.w_inline_block}`}>
                                                    <p className={styles.my_account_link}>My List</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.account_right}>{props.children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
