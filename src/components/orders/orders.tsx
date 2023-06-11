import classNames from 'classnames';
import styles from './orders.module.scss';
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export interface OrdersProps {
    className?: string;
    menuItem: any;
}


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-orderss-and-templates
 */
export const Orders = ({ className, menuItem }: OrdersProps) => {
    const { state, dispatch } = useContext(OrderContext);

    return (
        <div className={classNames(styles.root, className)} onClick={() => { dispatch({ type: "setItems", payload: menuItem }) }}>
            { menuItem &&
                <div className={styles.order_container}>
                    <div className={styles.itemName}>
                        <span> {menuItem.item_num ? menuItem.item_num + "." : ""} {menuItem.name}</span>
                    </div>
                </div>
            }
        </div>
    );
};