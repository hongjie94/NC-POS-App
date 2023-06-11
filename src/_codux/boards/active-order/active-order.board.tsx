import { createBoard } from '@wixc3/react-board';
import { ActiveOrder } from '../../../components/activeOrder/activeOrder';

export default createBoard({
    name: 'ActiveOrder',
    Board: () => <ActiveOrder />
});
