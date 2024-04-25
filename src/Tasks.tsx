import { CheckIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { completedTodoListAtom, todoListAtom } from './todoAtom';

import { useAutoAnimate } from '@formkit/auto-animate/react';

const Tasks = () => {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const [completedTasks, setCompletedTask] = useRecoilState(
        completedTodoListAtom
    );

    const [parent] = useAutoAnimate();

    function handleChange(index: number) {
        const taskCompleted = todoList.at(index);

        if (taskCompleted) {
            setCompletedTask([...completedTasks, taskCompleted]);
        }
        setTodoList([
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ]);
    }
    return (
        <Box>
            <Text textAlign={'center'} fontWeight="semibold" marginBottom={2}>
                {(todoList.length !== 0 && 'Tasks') || 'Hooray! All Done!'}
            </Text>
            <UnorderedList
                ref={parent}
                display={'flex'}
                flexDirection={'column-reverse'}
                listStyleType={'none'}
                margin={'0'}
            >
                {todoList.map((todo, index) => (
                    <ListItem>
                        <Flex
                            minWidth={40}
                            flexGrow={'1'}
                            color={'white'}
                            bgColor={'blue.600'}
                            rounded={'md'}
                            px={'3'}
                            py={2}
                            mb={2}
                            justify={'space-between'}
                            transition="all"
                        >
                            <Text>{todo.title}</Text>
                            <Button
                                color={'black'}
                                rounded={'full'}
                                size={'xs'}
                                onClick={() => {
                                    handleChange(index);
                                }}
                            >
                                <CheckIcon boxSize={3} />
                            </Button>
                        </Flex>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
};

export default Tasks;
