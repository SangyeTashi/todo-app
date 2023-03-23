import { CheckIcon } from '@chakra-ui/icons';
import { Text, Checkbox, Flex, Button, Box } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { Todo, todoListAtom } from './todoAtom';

interface Props {
    todo: Todo;
}

const ToDo = ({ todo }: Props) => {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const index = todoList.findIndex((item) => item === todo);

    function handleChange() {
        const newList = replaceItemAtIndex(todoList, index, {
            ...todo,
            completed: !todo.completed,
        });

        setTodoList(newList);
    }
    return (
        <Flex>
            {!todo.completed && (
                <Flex
                    minWidth={40}
                    flexGrow={'1'}
                    color={'white'}
                    bgColor={'blue.600'}
                    rounded={'md'}
                    px={'3'}
                    py={2}
                    mb={1}
                    transition={'ease-in'}
                    justify={'space-between'}
                >
                    <Text>{todo.title}</Text>
                    <Button
                        color={'black'}
                        rounded={'full'}
                        size={'xs'}
                        onClick={handleChange}
                    >
                        <CheckIcon boxSize={2} />
                    </Button>
                </Flex>
            )}

            {todo.completed && (
                <Box
                    minWidth={40}
                    flexGrow={'1'}
                    color={'white'}
                    bgColor={'gray.500'}
                    rounded={'md'}
                    px={'3'}
                    py={2}
                    mb={1}
                    transition={'all ease-in'}
                >
                    <Text>{todo.title}</Text>
                </Box>
            )}
        </Flex>
    );
};

function replaceItemAtIndex(arr: Todo[], index: number, newItem: Todo): Todo[] {
    const newTodo: Todo[] = [
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index + 1),
    ];
    return newTodo;
}
export default ToDo;
