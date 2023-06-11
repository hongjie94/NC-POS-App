import { createBoard } from '@wixc3/react-board';
import { Category } from '../../../components/category/category';

export default createBoard({
    name: 'Category',
    Board: () => <Category />,
    environmentProps: {
        canvasWidth: 897,
        windowWidth: 1024,
        canvasHeight: 686,
    },
});
