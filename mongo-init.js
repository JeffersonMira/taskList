db.auth('user', 'password')

db = db.getSiblingDB('task-list')

db.createUser({
    user: 'test-user',
    pwd: 'test-password',
    roles: [
        {
            role: 'root',
            db: 'test-database',
        },
    ],
});