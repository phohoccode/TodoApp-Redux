import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../redux/actions';
import filterSlice from '../Filters/FilterSlice'

const { Search } = Input;

export default function Filters() {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [filterStatus, setFilterStatus] = useState('All')
    const [filterPriorities, setFilterPriorities] = useState([])

    const handleSearch = (value) => {
        setSearchText(value)
        // dispatch(searchFilterChange(value))
        dispatch(filterSlice.actions.searchFilterChange(value))
    }

    const handleStatusChange = e => {       
        setFilterStatus(e.target.value)
        // dispatch(statusFilterChange(e.target.value))
        dispatch(filterSlice.actions.statusFilterChange(e.target.value))
    }

    const handleOnchangePriorities = (value) => {
        setFilterPriorities(value)
        // dispatch(priorityFilterChange(value))
        dispatch(filterSlice.actions.priorityFilterChange(value))
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder='input search text'
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={filterStatus} onChange={(e) => handleStatusChange(e)}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={filterPriorities}
                    onChange={(value) => handleOnchangePriorities(value)}
                >
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
            </Col>
        </Row>
    );
}
