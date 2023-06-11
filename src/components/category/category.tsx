import classNames from 'classnames';
import styles from './category.module.scss';
import { Orders } from '../orders/orders';
import { OrderContext } from '../context/OrderContext';
import {useContext} from 'react'


export interface CategoryProps {
    className?: string;
}

interface itemObj {
    category: string;
    name: string;
    description: null;
    item_num: string;
    pt_price: null;
    qt_price: null;
    price: string;
    spicy: boolean;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-categorys-and-templates
 */
export const Category = ({ className }: CategoryProps) => {
    const { state } = useContext(OrderContext)
   
    return (
        <div className={classNames(className, styles.mid_cate)}>
            <div className={styles.header}>
              <div className={styles.cate_div}>
                <h2>
                  {state.menu === "chineseMenu"? "CHINESE ":"THAI "} 
                  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5L10.5 0.5M9 5.5L12.5 2.5M7 13.5C8.72391 13.5 10.3772 12.8152 11.5962 11.5962C12.8152 10.3772 13.5 8.72391 13.5 7H0.5C0.5 8.72391 1.18482 10.3772 2.40381 11.5962C3.00739 12.1998 3.72394 12.6786 4.51256 13.0052C5.30117 13.3319 6.14641 13.5 7 13.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </h2>
                <span>
                    <svg width="20" height="10" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7L13.65 13.15C13.4667 13.4167 13.2293 13.625 12.938 13.775C12.6467 13.925 12.334 14 12 14H2C1.45 14 0.979002 13.804 0.587002 13.412C0.195002 13.02 -0.000664969 12.5493 1.69779e-06 12V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H12C12.3333 1.69779e-06 12.646 0.0750016 12.938 0.225002C13.23 0.375002 13.4673 0.583335 13.65 0.850002L18 7ZM7.525 11L8.775 8.25L11.525 7L8.775 5.75L7.525 3L6.275 5.75L3.525 7L6.275 8.25L7.525 11Z" fill="black"/>
                    </svg>
                    {state.category}
                </span>
              </div>
              <div className={styles.search_container}>
                  <form action="#">
                      <input type="text" required placeholder="Search..." />
                      <button type="submit">
                          <svg className={styles.search_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#fff'>
                              <path d="M22.707 21.293l-6.4-6.4a8.5 8.5 0 1 0-1.414 1.414l6.4 6.4a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414zM4.5 8.5a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/>
                          </svg>                        
                      </button>
                  </form>
              </div>
            </div>
            <div className={styles.orders_wrap}>
                {state.menuItems && state.menuItems.map((item, i)=>(
                    <Orders key={i} menuItem={item} />
                ))} 
            </div>
        </div>
    );
};
