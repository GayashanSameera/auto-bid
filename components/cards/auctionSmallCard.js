import styles from './auctionSmallCard.module.css';
import { ArrowRightOutlined } from "@ant-design/icons";

const AuctionSmallCard = (props) => {

    const { img, title } = props;
    return (
        <a className={`${styles.auction_item_wrapper} ${styles.w_inline_block}`} >
            <div className={styles.avction_content_wrapper}>
                <div className={styles.image_wrapper}>
                    <img src={img} loading="lazy" alt="" className={styles.image_cover} />

                </div>
            </div>
            <div className={styles.button_tertiary} >
                <div className={`${styles.text_button} ${styles.is_link}`} >{title}</div>
                <div className={`${styles.button_tertiary_icon} ${styles.w_embed}`} >
                    <ArrowRightOutlined />
                </div>
            </div>
        </a>
    );
};

export default AuctionSmallCard;