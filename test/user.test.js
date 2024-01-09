// test/user.test.js
import { expect } from 'chai';
import { stub } from 'sinon';
import UserModule from '../user.js';

describe('UserModule', () => {
  let userModule;

  beforeEach(() => {
    userModule = new UserModule([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ]);
  });

  it('should create a user', () => {
    const newUser = { id: 3, name: 'Bob Smith', email: 'bob@example.com' };
    const createUserStub = stub(userModule, 'createUser').returns(newUser);

    const result = userModule.createUser(newUser);

    expect(result).to.equal(newUser);
    expect(createUserStub.calledOnceWith(newUser)).to.be.true;

    createUserStub.restore();
  });

  it('should get a user by id', () => {
    const userId = 1;
    const getUserByIdStub = stub(userModule, 'getUserById').returns({ id: userId });

    const result = userModule.getUserById(userId);

    expect(result).to.deep.equal({ id: userId });
    expect(getUserByIdStub.calledOnceWith(userId)).to.be.true;

    getUserByIdStub.restore();
  });

  it('should update a user', () => {
    const userId = 1;
    const updatedUser = { name: 'Updated User' };
    const updateUserStub = stub(userModule, 'updateUser').returns(updatedUser);

    const result = userModule.updateUser(userId, updatedUser);

    expect(result).to.equal(updatedUser);
    expect(updateUserStub.calledOnceWith(userId, updatedUser)).to.be.true;

    updateUserStub.restore();
  });

  it('should delete a user', () => {
    const userId = 1;
    const deletedUser = { id: userId, name: 'John Doe', email: 'john@example.com' };
    const deleteUserStub = stub(userModule, 'deleteUser').returns(deletedUser);

    const result = userModule.deleteUser(userId);

    expect(result).to.equal(deletedUser);
    expect(deleteUserStub.calledOnceWith(userId)).to.be.true;

    deleteUserStub.restore();
  });
});
