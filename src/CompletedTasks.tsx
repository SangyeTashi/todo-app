import { DeleteIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { completedTodoListAtom, Todo } from './todoAtom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const CompletedTasks = () => {
    const [parentRef] = useAutoAnimate<HTMLDivElement>();
    const [completedTasks, setCompletedTask] = useRecoilState(
        completedTodoListAtom
    );
    function handleClick(index: number) {
        const newList = [
            ...completedTasks.slice(0, index),
            ...completedTasks.slice(index + 1),
        ];
        setCompletedTask(newList);
    }
    return (
        <>
            <Text textAlign={'center'} color={'gray.500'} mb="1">
                {completedTasks.length !== 0 && 'Completed Tasks'}
            </Text>
            <Flex direction={'column-reverse'} ref={parentRef}>
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

export default CompletedTasks;
