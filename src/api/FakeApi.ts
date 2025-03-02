import { IActivityRecord, IUser } from '@/types/user'
import { faker } from '@faker-js/faker'

const actions = [
    { type: 'Update password', color: 'red' },
    { type: 'Send message', color: 'blue' },
    { type: 'Change profile', color: 'green' },
    { type: 'Download document', color: 'grey' },
]

function fakeActivityHistory(count: number): IActivityRecord[] {
    return Array.from(
        { length: Math.floor(Math.random() * count) + 1 },
        () => ({
            id: faker.string.uuid(),
            action: actions[Math.floor(Math.random() * actions.length)],
        })
    )
}

export const fakeUsers = (count: number): IUser[] => {
    return Array.from({ length: count }, () => ({
        key: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        registration: faker.date.birthdate().toISOString(),
        status: Math.random() > 0.5,
        phone: faker.phone.number({ style: 'international' }),
        country: faker.location.country(),
        activityHistory: fakeActivityHistory(4),
    }))
}
