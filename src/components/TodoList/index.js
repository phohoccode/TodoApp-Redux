import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { todoRemainingSelector } from '../redux/selector';

export default function TodoList() {
    const dispatch = useDispatch()
    const todoList = useSelector(todoRemainingSelector)
    const [todoName, setTodoName] = useState('')
    const [prioriry, setPrioriry] = useState('Medium')

    const hanldeAddTodo = () => {
        dispatch(addTodo({
            id: uuidv4(),
            name: todoName,
            prioriry: prioriry,
            completed: false
        }))
        setTodoName('')
        setPrioriry('Medium')
    }

    useEffect(() => {
        console.log(todoList)
    }, [todoList])

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo, index) => (
                    <Todo
                        key={index}
                        name={todo.name}
                        prioriry={todo.prioriry}
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
                    <Select value={prioriry} onChange={(value) => setPrioriry(value)}>
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
