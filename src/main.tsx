import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ant-design/v5-patch-for-react-19'
import './main.css'
import { AppLayout } from '@layout/AppLayout'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppLayout />
    </StrictMode>
)
