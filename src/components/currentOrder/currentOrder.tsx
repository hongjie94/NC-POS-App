import classNames from 'classnames';
import styles from './currentOrder.module.scss';
import { AiOutlineClear } from 'react-icons/ai';
import { ActiveOrder } from '../activeOrder/activeOrder';
import { OrderFooter } from '../orderFooter/orderFooter';

export interface CurrentOrderProps {
  className?: string;
}

function getCurrentDate(separator = '.') {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${month < 10 ? `0${month}` : `${month}`}${separator}${date}${separator}${year}`;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-curent-orders-and-templates
 **/

export const CurrentOrder = ({ className }: CurrentOrderProps) => {
  return (
    <div className={classNames(styles.root, className, styles.currentOrder)}>
      <div className={styles.header}>
        <span>Current Order</span>
        <a className={styles.clearBtn}>
          <AiOutlineClear className={styles.clearSvg} />
        </a>
      </div>

      <div className={styles.orderNumBox}>
        <h4>Order# number</h4>
        <span>{getCurrentDate()}</span>
      </div>

      <div className={styles.orderContents}>
        <ActiveOrder/>  
        <OrderFooter/>
      </div>
    </div>
  );
};
