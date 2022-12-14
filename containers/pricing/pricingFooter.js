import styles from './pricingFooter.module.css';
import { AuctionSmallCard } from '../../components/cards';

const pricing = [
    {
        img: "/Group-1837.png",
        title: "Japanese Auction"
    },
    {
        img: "/Group-2296.png",
        title: "Japanese Auction"
    },
    {
        img: "/Group-2072.png",
        title: "Japanese Auction"
    },
    {
        img: "/Group-1872.png",
        title: "Japanese Auction"
    }
]

const PricingFooter = () => {
    return (
        <div className={`${styles.section} ${styles.is_auction}`} >
            <div className={styles.page_padding}>
                <div className={styles.container_large}>
                    <div className={`${styles.padding_vertical} ${styles.padding_xlarge}`} >
                        <div className={`${styles.margin_bottom} ${styles.margin_medium}`} >
                            <h1 >Auction Available</h1>
                        </div>
                        <div className={`${styles.w_layout_grid} ${styles.grid_repeat_column}  ${styles.is_auction}`} >

                            {pricing.map((item, index) => <AuctionSmallCard key={index} img={item.img} title={item.title} />)}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingFooter;