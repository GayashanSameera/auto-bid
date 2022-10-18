
import styles from './breadcrumb.module.css';

export const Breadcrumb = () => {
    return (
        <>
            <div className={`${styles.section} ${styles.is_breadcrumb}`}>
                <div className={`${styles.page_padding}`} >
                    <div className={`${styles.container_large}`}>
                        <div className={`${styles.padding_vertical} ${styles.padding_small}`}>
                            <div className={`${styles.breadcrumb_wrapper}`} >
                                <div className={`${styles.breadcrumb_links}`}>
                                    <a href="#" className={`${styles.link_item}`} >Home</a>
                                    <a href="#" className={`${styles.link_item} ${styles.is_active}`}>Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
