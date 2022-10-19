import PricingFooter from '../pricing/pricingFooter';
import styles from './AboutHeader.module.css';

const accomplishment = [
    {
        src: "/Group-3164.png",
        content: "20+ decades in experience Starting from 1997"
    },
    {
        src: "/Group-3165.png",
        content: "Exporting to 40+ countries in the world"
    },
    {
        src: "/Group-3166.png",
        content: "No 1 consecutively in 2016, 2017 Aucnet Auction Award"
    },
    {
        src: "/Group-3167.png",
        content: "Amongst the top used vehicle exporters in Japan"
    }
]

export const symbols = (props) => {
    const { src, content, index } = props;
    return (
        <div key={index} className={`${styles.accomplishment_item_wrapper} `} >
            <div className={`${styles.accomplishment_content_wrapper} `}  >
                <div >
                    <img src={src} loading="lazy" className={`${styles.icon_large} `} />
                </div>
                <p className={`${styles.text_size_large} ${styles.text_weight_semibold} `}>{content}</p>
            </div>
        </div>
    );
}

const AboutHeader = () => {
    return (
        <>
            <div className={`${styles.section} ${styles.is_about}`}>
                <div className={`${styles.page_padding}`}>
                    <div className={`${styles.container_large}`} >
                        <div className={`${styles.padding_vertical} ${styles.padding_xlarge}`}>

                            <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_about_hero}`}>

                                <div className={`${styles.about_text_wrapper}`}>
                                    <div className={`${styles.margin_bottom} ${styles.margin_xxsmall}`} >
                                        <p className={`${styles.text_size_medium} ${styles.text_weight_normal}`}  >About us</p>
                                    </div>
                                    <h1 >Over two decades in the car export industry since 1997.</h1>
                                </div>
                                <div className={`${styles.about_content_right}`} >
                                    <div className={`${styles.image_wrapper}`} ><img src="/Group-3163.png" loading="lazy" sizes="(max-width: 479px) 100vw, 90vw" className={`${styles.image_cover}`} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.section} ${styles.is_vision}`} >
                <div className={`${styles.page_padding}`}>
                    <div className={`${styles.container_large}`}>
                        <div className={`${styles.padding_vertical} ${styles.padding_top} ${styles.padding_xlarge}`} >
                            <div className={`${styles.w_layout_grid} ${styles.grid_2_column} ${styles.is_vision}`} >
                                <div >
                                    <div className={`${styles.margin_bottom} ${styles.margin_small}`}>
                                        <h1 className={`${styles.text_weight_normal}`}>Vision</h1>
                                    </div>
                                    <p className={`${styles.text_size_xlarge} ${styles.text_style_muted}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                </div>
                                <div className={`${styles.mission_content_right}`} >
                                    <div className={`${styles.mission_text_wrapper}`} >
                                        <div className={`${styles.margin_bottom} ${styles.margin_small}`}>
                                            <h1 className={`${styles.text_weight_normal}`}>Mission</h1>
                                        </div>
                                        <p className={`${styles.text_size_xlarge} ${styles.text_style_muted}`} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PricingFooter />
                <div className={`${styles.section} ${styles.is_accomplishment}`} >
                    <div className={`${styles.page_padding}`} >
                        <div className={`${styles.container_medium}`}>
                            <div className={`${styles.padding_bottom} ${styles.padding_xlarge}`} >
                                <div className={`${styles.w_layout_grid} ${styles.grid_repeat_column} ${styles.is_accomplishment}`} >
                                    {
                                        accomplishment.map((item, index) => symbols({ index, ...item }))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutHeader;
