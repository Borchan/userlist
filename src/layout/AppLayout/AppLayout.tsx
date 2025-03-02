import { Layout } from 'antd'
import { AppHeader } from '@layout/AppHeader'
import { AppContent } from '@layout/AppContent'
import { AppFooter } from '@layout/AppFooter/'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { userStore } from '@/store/userStore'
import s from './appLayout.module.css'

export const AppLayout = observer(() => {
    useEffect(() => {
        userStore.fetchUsers()
    }, [])
    return (
        <Layout className={s.layout}>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Layout>
    )
})
