import classNames from 'classnames';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Category } from './components/category/category';
import { CurrentOrder } from './components/currentOrder/currentOrder';
import { OrderContextProvider } from './components/context/OrderContext';

function App() {
  return (
    <div className={classNames(styles.App, styles.app)}>
      <OrderContextProvider>
        <Menu className={styles.menu} />
        <Category />
        <CurrentOrder className={styles.currentOrder} />
      </OrderContextProvider>
    </div>
  );
}

export default App;
