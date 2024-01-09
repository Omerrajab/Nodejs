class UserModule {
    constructor(database) {
        this.database = database || [];
    }

    createUser(user) {
        this.database.push(user);
        return user;
    }

    getUserById(userId) {
        return this.database.find(user => user.id === userId);
    }

    updateUser(userId, updatedUser) {
        const index = this.database.findIndex(user => user.id === userId);
        if (index !== -1) {
            this.database[index] = { ...this.database[index], ...updatedUser };
            return this.database[index];
        }
        return null;
    }

    deleteUser(userId) {
        const index = this.database.findIndex(user => user.id === userId);
        if (index !== -1) {
            const deletedUser = this.database.splice(index, 1)[0];
            return deletedUser;
        }
        return null;
    }
}

export default UserModule;
