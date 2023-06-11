import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1262,
        canvasHeight: 1042,
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
