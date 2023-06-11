import { createBoard } from '@wixc3/react-board';
import { CurrentOrder } from '../../../components/currentOrder/currentOrder';

export default createBoard({
    name: 'CurrentOrder',
    Board: () => <CurrentOrder />,
    environmentProps: {
        canvasWidth: 440,
        canvasHeight: 634,
    },
});
