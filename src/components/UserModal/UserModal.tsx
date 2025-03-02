import { Descriptions, Modal, Timeline } from 'antd'
import { observer } from 'mobx-react-lite'
import { userStore } from '@/store/userStore'
import s from './userModal.module.css'

export const UserModal: React.FC = observer(() => {
    const handleClose = () => {
        userStore.setSelectedUser(null)
    }
    if (!userStore.selectedUser) return null
    return (
        <Modal
            title="User Details"
            open={!!userStore.selectedUser}
            onCancel={handleClose}
            footer={false}
        >
            <Descriptions bordered column={1}>
                <Descriptions.Item label="Name">
                    {userStore.selectedUser.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                    {userStore.selectedUser.email}
                </Descriptions.Item>
                <Descriptions.Item label="Registration Date">
                    {userStore.selectedUser.registration}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                    {userStore.selectedUser.status ? 'Active' : 'Inactive'}
                </Descriptions.Item>
                <Descriptions.Item label="Phone">
                    {userStore.selectedUser.phone}
                </Descriptions.Item>
                <Descriptions.Item label="Country">
                    {userStore.selectedUser.country}
                </Descriptions.Item>
            </Descriptions>
            <Timeline
                className={s.timeline}
                items={userStore.selectedUser.activityHistory.map(
                    (activity) => ({
                        children: activity.action.type,
                        color: activity.action.color,
                    })
                )}
            />
        </Modal>
    )
})
