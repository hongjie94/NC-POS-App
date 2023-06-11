import classNames from 'classnames';
import styles from './activeOrder.module.scss';

export interface ActiveOrderProps {
    className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-active-orders-and-templates
 */
export const ActiveOrder = ({ className }: ActiveOrderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.orderBoxWrapper}>
                <div className={styles.orderBox}>
                    <span>Order Name</span>
                    <span className={styles.price}>$5:00</span>
                    <div className={styles.qtyWrap}>
                        <button>
                            <svg className={styles.minusIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
                        </button>
                        <span>5</span>
                        <button>
                             <svg className={styles.plusIcon}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                        </button>                       
                    </div>
                </div>
            </div>  
        </div>
    );
};
