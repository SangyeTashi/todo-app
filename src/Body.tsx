import { Flex, Input, Button } from '@chakra-ui/react';
import { FormEventHandler, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CompletedTasks from './CompletedTasks';
import Tasks from './Tasks';
import { completedTodoListAtom, todoListAtom } from './todoAtom';

function Body() {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);
    const completedTasks = useRecoilValue(completedTodoListAtom);

    const inputRef = useRef<null | HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputRef.current?.value) {
            setTodoList([
                ...todoList,
                { title: inputRef.current.value, completed: false },
            ]);
            inputRef.current.value = '';
        }
    };

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoList));
    }, [todoList.length]);

    useEffect(() => {
        localStorage.setItem('completed', JSON.stringify(completedTasks));
    }, [completedTasks.length]);
    return (
        <Flex alignItems="center" direction="column" padding={8} height="">
            <form onSubmit={handleSubmit}>
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
                        type="submit"
                        _hover={{ bgColor: 'blue.300' }}
                    >
                        +
                    </Button>
                </Flex>
            </form>
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
