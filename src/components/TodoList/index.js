import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoRemainingSelector } from '../redux/selector';
// import { addTodo } from '../redux/actions';
import todoListSlice, { addNewTodo } from '../TodoList/TodoSlice'

export default function TodoList() {
    const dispatch = useDispatch()
    const todoList = useSelector(todoRemainingSelector)
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')

    const hanldeAddTodo = () => {
        // dispatch(addTodo({
        //     id: uuidv4(),
        //     name: todoName,
        //     priority: priority,
        //     completed: false
        // }))

        // dispatch(todoListSlice.actions.addTodo({
        //     id: uuidv4(),
        //     name: todoName,
        //     priority: priority,
        //     completed: false
        // }))

        dispatch(addNewTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            completed: false
        }))
        setTodoName('')
        setPriority('Medium')
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo, index) => (
                    <Todo
                        key={index}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input
                        value={todoName}
                        onChange={(e) => setTodoName(e.target.value)}
                    />
                    <Select value={priority} onChange={(value) => setPriority(value)}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button onClick={() => hanldeAddTodo()} type='primary'>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
