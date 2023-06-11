import classNames from 'classnames';
import styles from './orderFooter.module.scss';

export interface OrderFooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-order-footer-boxs-and-templates
 */
export const OrderFooter = ({ className }: OrderFooterProps) => {
  return ( 
    <div className={classNames(styles.root, className)}>
      <div className={styles.orderTotalWrapper}>
        <div className={styles.orderSubTotal}>
          <span>Subtotal</span>
          <span>$0.00</span>
        </div>
        <div className={styles.orderTax}>
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <hr />
        <div className={styles.orderTotal}>
          <span>Total</span>
          <span>$0.00</span>
        </div>
      </div>
      <div className={styles.orderFooterWrapper}>
        <div className={styles.orderFooter}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </div>
  );
};
