import { Footer } from 'antd/es/layout/layout'
import s from './appFooter.module.css'
export const AppFooter = () => {
    return (
        <Footer className={s.footer}>
            Provitech {new Date().getFullYear()} Test Task
        </Footer>
    )
}
