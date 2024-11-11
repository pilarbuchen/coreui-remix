import { createBoard } from '@wixc3/react-board';
import MyCoreUIComponent from '../../../src/components/my-core-ui-component/my-core-ui-component';

export default createBoard({
    name: 'MyCoreUIComponent ',
    Board: () => <MyCoreUIComponent />,
});
