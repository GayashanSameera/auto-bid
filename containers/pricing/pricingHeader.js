import styles from './pricingHeader.module.css';

const content = <> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Vestibulum vitae nunc vitae neque.</>

const PricingHeader = () => {
    return (
        <div className={styles.section}>
            <div className={styles.page_padding}>
                <div className={styles.container_small} >
                    <div className={`${styles.padding_vertical} ${styles.padding_xlarge}`}>
                        <div className={styles.is_center} >
                            <h1 className={`${styles.margin_bottom} ${styles.margin_tiny}`}>Pricing</h1>
                            <p className={`${styles.text_size_large} ${styles.text_style_muted} ${styles.text_align_center}`} >{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingHeader;