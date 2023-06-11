import { createBoard } from '@wixc3/react-board';
import { OrderFooterBox } from '../../../components/orderFooter/orderFooter';

export default createBoard({
    name: 'OrderFooterBox',
    Board: () => <OrderFooterBox />
});
