import { Flex, Input, Button, Text, Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import CompletedTasks from './CompletedTasks';
import Tasks from './Tasks';
import { todoListAtom } from './todoAtom';

function Body() {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const inputRef = useRef<null | HTMLInputElement>(null);
    const handleClick = () => {
        if (inputRef.current?.value) {
            setTodoList([
                ...todoList,
                { title: inputRef.current.value, completed: false },
            ]);
            inputRef.current.value = '';
        }
    };
    return (
        <Flex alignItems="center" direction="column" padding={8} height="">
            <Flex mb={4}>
                <Input
                    variant={'outline'}
                    type={'text'}
                    roundedLeft={'lg'}
                    roundedRight={'none'}
                    ref={inputRef}
                    placeholder="Add a task.."
                    bgColor={'whiteAlpha.800'}
                    borderColor={'whiteAlpha.800'}
                />
                <Button
                    color={'white'}
                    bgColor={'blue.500'}
                    roundedRight={'lg'}
                    roundedLeft={'none'}
                    onClick={handleClick}
                    _hover={{ bgColor: 'blue.300' }}
                >
                    +
                </Button>
            </Flex>

            <Flex
                direction={'column'}
                bgColor={'whiteAlpha.800'}
                padding={4}
                rounded={'lg'}
                minWidth={280}
                maxWidth={400}
            >
                <Tasks />
                <CompletedTasks />
            </Flex>
        </Flex>
    );
}

export default Body;
