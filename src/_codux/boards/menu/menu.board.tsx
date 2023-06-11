import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />,
    environmentProps: {
        canvasWidth: 341,
        windowHeight: 875,
    },
});
