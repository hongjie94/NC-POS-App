import { createBoard } from '@wixc3/react-board';
import { Orders } from '../../../components/orders/orders';

export default createBoard({
    name: 'Orders',
    Board: () => <Orders />
});
