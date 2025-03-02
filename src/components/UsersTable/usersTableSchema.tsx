import { IUser } from '@/types/user'
import { TableColumnsType, Tag } from 'antd'

export const userTableColumns: TableColumnsType<IUser> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: true,
    },
    {
        title: 'Registration',
        dataIndex: 'registration',
        key: 'registration',
        sorter: true,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: boolean) => (
            <Tag color={status ? 'green' : 'red'}>
                {status ? 'Active' : 'Inactive'}
            </Tag>
        ),
        filters: [
            {
                text: 'Active',
                value: true,
            },
            {
                text: 'Inactive',
                value: false,
            },
        ],
    },
]
