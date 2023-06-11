import classNames from 'classnames';
import { useContext, useState } from 'react';
import styles from './menu.module.scss';
import logo from '../../assets/Logo.png'
import { OrderContext } from '../context/OrderContext';

export interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const { state, dispatch } = useContext(OrderContext);

  const chineseMenuCategories: Array<String> = [
    'Appetizers',
    'Soups',
    'Chow Mein',
    'Chop Suey',
    'Fried Rice',
    'Lo Mein',
    'Beef',
    'Pork',
    'Chicken',
    'Seafood',
    'Sweet & Sour',
    'Vegetable Dishes',
    'Chow Fun or Rice Noodles',
    "Chef's Special Cantonese Dishes",
    "Chef's Special Szechuan & Hunan Dishes",
    'Egg Foo Young',
    'Suggestions',
    'Combination Plates',
    'Lunch Special',
    'Side Order',
  ];

  const thatMenuCategories: Array<String> = [
    "Soups",
    "Salads",
    "Appetizers",
    "Desserts",
    "Noodles & Rice",
    "Thai Cuisine",
    "Chef Specials",
    "Thai Curry"
  ];

  type menuCategories = Array<String>;

  const [menuCategories, setMenuCategories] = useState(chineseMenuCategories);

  return (
    <div className={classNames(styles.root, className, styles.Menu)}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menuOptions}>
        <span className={state.menu === "chineseMenu" ? styles.menuActive : ""}
          onClick={() => { 
            setMenuCategories(chineseMenuCategories),dispatch({ type: "setMenu", payload: "chineseMenu" }) }}
        >Chinese Menu</span>

        <span className={state.menu === "thaiMenu" ? styles.menuActive : ""}
          onClick={() => { setMenuCategories(thatMenuCategories), dispatch({ type: "setMenu", payload: "thaiMenu" }) }}
        >Thai Menu</span>
        <hr />
      </div>
      <div className={styles.cate_container}>
        <ul className={styles.cate_list}>
          {menuCategories.map((category: any, i: any) => (
            <li
              className={category === state.category ? styles.active_li : ""}
              key={i}
              onClick={() => { dispatch({ type: "setCategory", payload: category }) }}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
