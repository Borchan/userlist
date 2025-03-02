import { Table, TableProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { userStore } from '@/store/userStore'
import { userTableColumns } from './usersTableSchema'
import { IUser } from '@/types/user'

const onChange: TableProps<IUser>['onChange'] = (
    pagination,
    filters,
    sorter: any
) => {
    userStore.setFilter(filters.status)
    userStore.setSort(sorter.field, sorter.order)
}

export const UsersTable: React.FC = observer(() => {
    return (
        <Table
            columns={userTableColumns}
            dataSource={userStore.filteredAndSortedUsers}
            loading={userStore.loading}
            onChange={onChange}
            showSorterTooltip={{
                target: 'sorter-icon',
            }}
            onRow={(record) => ({
                onClick: () => userStore.setSelectedUser(record),
            })}
        />
    )
})
