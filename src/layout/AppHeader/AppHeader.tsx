import { Header } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title'
import s from './appHeader.module.css'

export const AppHeader = () => {
    return (
        <Header className={s.header}>
            <Title className={s.title}>User List</Title>
        </Header>
    )
}
