import styles from './pricingTable.module.css';

const packages = <>Please select a package <br />to proceed further</>
const renewalDate = <>Next renewal <br />on 11-04-2021</>

const prisingList = [
    {
        description: "View Auctions",
        is_gold: true,
        cl_data: [null, null, null, null, null]
    },
    {
        description: "Japanese Auction",
        cl_data: ["tick", "tick", "tick", "tick", "tick"]
    },
    {
        description: "One Price Auction",
        cl_data: ["tick", "tick", "tick", "tick", "tick"]
    },
    {
        description: "Heavy Duty Machinery Auction",
        cl_data: ["tick", "tick", "tick", "tick", "tick"]
    },
    {
        description: "Bike Auction",
        cl_data: ["tick", "tick", "tick", "tick", "tick"]
    },
    {
        description: "Dummy title",
        is_gold: true,
        cl_data: [null, null, null, null, null]
    },
    {
        description: "Japanese Auction",
        cl_data: ["cross", "tick", "tick", "tick", "tick"]
    },
    {
        description: "One Price Auction",
        cl_data: ["cross", "request-only", "tick", "tick", "tick"]
    },
    {
        description: "Heavy Duty Machinery Auction",
        cl_data: ["cross", "request-only", "tick", "tick", "tick"]
    },
    {
        description: "Bike Auction",
        cl_data: ["cross", "request-only", "tick", "tick", "tick"]
    },
    {
        description: "Dummy title",
        is_gold: true,
        cl_data: [null, null, null, null, null]
    },
    {
        description: "Japanese Auction",
        cl_data: ["cross", "cross", "cross", "cross", "tick"]
    },
    {
        description: "One Price Auction",
        cl_data: ["cross", "cross", "cross", "cross", "tick"]
    },
    {
        description: "Heavy Duty Machinery Auction",
        cl_data: ["cross", "cross", "cross", "cross", "tick"]
    },
    {
        description: "Bike Auction",
        cl_data: ["cross", "cross", "cross", "cross", "tick"]
    },
];

const pricingRowSelector = (type, row) => {

    let tags = null;
    if (type === "tick") {
        tags = <div className={`${styles.pricing_row} ${styles.is_1}`}><img src="/Icon-material-done.png" loading="lazy" className={styles.package_icon_tick} /></div>
    } else if (type === "cross") {
        tags = <div className={`${styles.pricing_row} ${styles.is_1}`}><img src="/Icon-ionic-md-close.png" loading="lazy" className={styles.package_icon} /></div>
    } else if (type === "request-only") {
        tags = <div className={`${styles.pricing_row} ${styles.is_1}`}> <p className={styles.package_text}>Request only</p> </div>
    } else {
        tags = <div className={`${styles.pricing_row} ${styles.is_1}`}></div>
    }

    return tags;


}

const pricingCreator = (params, ind) => {
    const { cl_data = [], description, is_gold } = params;
    return (
        <div className={`${styles.w_layout_grid} ${styles.pricing_row}`}>
            <div className={styles.pricing_feature}>
                <div className={`${styles.package_desc_list} ${is_gold ? styles.is_gold : ''}`} >{description}</div>
            </div>
            {
                cl_data.map((item, index) => pricingRowSelector(item, index + 1))
            }
        </div>
    );
}

const PricingTable = () => {
    return (
        <>
            <header className={styles.section} >
                <div className={`${styles.section} ${styles.is_pricing}`} >
                    <div className={styles.container_large} >
                        <div className={styles.pricing_component} >
                            <div className={`${styles.w_layout_grid} ${styles.pricing_top_row}`} >
                                <div className={styles.pricing_text}  >
                                    <p className={styles.text_size_large}>{packages}</p>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_1}`} >
                                    <div className={styles.pricing_title_wrap}>
                                        <p className={styles.text_size_xlarge}>2 Weeks</p>
                                        <p className={styles.text_size_xlarge}>FREE TRIAL</p>
                                    </div>
                                    <div >
                                        <a href="#" className={`${styles.button_secondary} ${styles.is_button_small} ${styles.w_button}`}>View</a>
                                    </div>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_2}`} >
                                    <div className={styles.pricing_title_wrap}>
                                        <div className={styles.price_content_wrapper}>
                                            <div className={styles.price}>$10</div>
                                            <div className={`${styles.package_label} ${styles.is_pricing}`}>/ month</div>
                                        </div>
                                    </div>
                                    <div >
                                        <a href="#" className={`${styles.button_secondary} ${styles.is_button_small} ${styles.w_button}`}>View</a>
                                    </div>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_3}`} >
                                    <div className={styles.pricing_title_wrap}>
                                        <div className={styles.price_content_wrapper}>
                                            <div className={styles.price}>$20</div>
                                            <div className={`${styles.package_label} ${styles.is_pricing}`}>/ month</div>
                                        </div>
                                    </div>
                                    <div >
                                        <a href="#" className={`${styles.button_secondary} ${styles.is_button_small} ${styles.w_button}`}>View</a>
                                    </div>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_4}`}>
                                    <div className={styles.pricing_title_wrap}>
                                        <div className={styles.price_content_wrapper}>
                                            <div className={styles.price}>$30</div>
                                            <div className={`${styles.package_label} ${styles.is_pricing}`}>/ month</div>
                                        </div>
                                    </div>
                                    <div >
                                        <a href="#" className={`${styles.button_secondary} ${styles.is_button_small} ${styles.w_button}`}>View</a>
                                    </div>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_5}`}>
                                    <div className={styles.pricing_title_wrap}>
                                        <div className={styles.price_content_wrapper}>
                                            <div className={`${styles.price} ${styles.is_package}`}>Platinum</div>
                                        </div>
                                    </div>
                                    <div >
                                        <a href="#" className={`${styles.button_secondary} ${styles.is_button_small} ${styles.w_button}`}>View</a>
                                    </div>
                                </div>
                            </div>
                            {prisingList.map((item, ind) => {
                                return pricingCreator(item, ind)
                            })
                            }
                            <div className={`${styles.w_layout_grid} ${styles.pricing_row} ${styles.is_last}`}>
                                <div className={styles.pricing_feature}></div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_1}`}>
                                    <a href="#" className={`${styles.button} ${styles.is_button_small} ${styles.w_button}`}>Start Now</a>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_2}`}>
                                    <a href="#" className={`${styles.button_secondary} ${styles.is_button_small} ${styles.w_button}`} >Current Plan</a>
                                    <p className={styles.renewal_date}>{renewalDate}</p>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_3}`}>
                                    <a href="#" className={`${styles.button} ${styles.is_button_small} ${styles.w_button}`}>Start Now</a>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_4}`}>
                                    <a href="#" className={`${styles.button} ${styles.is_button_small} ${styles.w_button}`}>Start Now</a>
                                </div>
                                <div className={`${styles.pricing_top_row_content} ${styles.is_5}`}>
                                    <a href="#" className={`${styles.button} ${styles.is_button_small} ${styles.w_button}`}>Start Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ header >
        </>
    );
};

export default PricingTable;