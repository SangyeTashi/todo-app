import { Button, Flex, Input } from '@chakra-ui/react';
import Body from './Body';

import { RecoilRoot } from 'recoil';

function App() {
    return (
        <RecoilRoot>
            <Body />
        </RecoilRoot>
    );
}

export default App;
