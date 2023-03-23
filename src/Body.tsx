import { Flex, Input, Button, Text, Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import ToDo from './ToDo';
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
        <Flex
            alignItems="center"
            direction="column"
            padding={8}
            bgColor={'gray.50'}
        >
            <Flex mb={4}>
                <Input
                    variant={'outline'}
                    type={'text'}
                    roundedLeft={'lg'}
                    roundedRight={'none'}
                    ref={inputRef}
                    placeholder="Add a task.."
                    _focus={{
                        bgColor: 'gray.100',
                    }}
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
                bgColor={'gray.200'}
                padding={4}
                rounded={'lg'}
                minWidth={280}
            >
                <Text fontSize={20} fontWeight={'bold'}>
                    Tasks :
                </Text>
                <Flex direction="column-reverse" marginBottom={3}>
                    {todoList.map(
                        (todo, index) => !todo.completed && <ToDo todo={todo} />
                    )}
                </Flex>

                <Flex direction="column" color={'gray.700'}>
                    <Text fontSize={18} fontWeight={'bold'} marginBottom="2">
                        Completed Tasks :
                    </Text>
                    {todoList.map(
                        (todo, index) => todo.completed && <ToDo todo={todo} />
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Body;
