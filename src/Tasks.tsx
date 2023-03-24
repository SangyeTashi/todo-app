import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { completedTodoListAtom, Todo, todoListAtom } from './todoAtom';
import { AnimatePresence, motion } from 'framer-motion';

const Tasks = () => {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const [completedTasks, setCompletedTask] = useRecoilState(
        completedTodoListAtom
    );
    function handleChange(index: number) {
        const taskCompleted = todoList.at(index);

        if (taskCompleted) {
            setCompletedTask([...completedTasks, taskCompleted]);
        }
        setTodoList([
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ]);

        console.log(todoList);
    }
    return (
        <>
            <Box>
                <Text
                    textAlign={'center'}
                    fontWeight="semibold"
                    marginBottom={2}
                >
                    {(todoList.length !== 0 && 'Tasks') || 'Hooray! All Done!'}
                </Text>
                {todoList.map((todo, index) => (
                    <motion.div
                        initial={{
                            y: -30,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ease: 'easeIn',
                            duration: 0.2,
                        }}
                        exit={{
                            x: 50,
                            opacity: 0,
                        }}
                    >
                        <Flex
                            minWidth={40}
                            flexGrow={'1'}
                            color={'white'}
                            bgColor={'blue.600'}
                            rounded={'md'}
                            px={'3'}
                            py={2}
                            mb={2}
                            transition={'ease-in'}
                            justify={'space-between'}
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
                    </motion.div>
                ))}
            </Box>
        </>
    );
};

export default Tasks;
