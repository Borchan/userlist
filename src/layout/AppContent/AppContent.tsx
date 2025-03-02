import { Content } from 'antd/es/layout/layout'
import { UsersTable } from '@components/UsersTable'
import { observer } from 'mobx-react-lite'
import { userStore } from '@/store/userStore'
import { Alert } from 'antd'
import { UserModal } from '@components/UserModal/'
import s from './appContent.module.css'

export const AppContent = observer(() => {
    return (
        <Content className={s.content}>
            <section className={s.section}>
                {userStore.error ? (
                    <Alert
                        message="Error"
                        description="Data loading error"
                        type="error"
                        showIcon
                    />
                ) : (
                    <UsersTable />
                )}

                <UserModal />
            </section>
        </Content>
    )
})
