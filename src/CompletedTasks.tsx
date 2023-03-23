import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { completedTodoListAtom, Todo } from './todoAtom';

const CompletedTasks = () => {
    const [completedTasks, setCompletedTask] = useRecoilState(
        completedTodoListAtom
    );
    function handleClick(index: number) {
        const newList = deleteItemAtIndex(completedTasks, index);
        setCompletedTask(newList);
    }
    return (
        <>
            <Text textAlign={'center'} color={'gray.500'} mb="1">
                {completedTasks.length !== 0 && 'Completed Tasks'}
            </Text>
            <Flex direction={'column-reverse'}>
                {completedTasks.map((todo, index) => (
                    <Flex
                        minWidth={40}
                        flexGrow={'1'}
                        color={'white'}
                        bgColor={'gray.500'}
                        rounded={'md'}
                        px={'3'}
                        py={2}
                        mb={1}
                        transition={'all ease-in'}
                        justify="space-between"
                    >
                        <Text>{todo.title}</Text>
                        <Button
                            color={'blackAlpha.600'}
                            rounded="full"
                            size={'xs'}
                            onClick={() => {
                                handleClick(index);
                            }}
                        >
                            <DeleteIcon />
                        </Button>
                    </Flex>
                ))}
            </Flex>
        </>
    );
};

function deleteItemAtIndex(arr: Todo[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
export default CompletedTasks;
