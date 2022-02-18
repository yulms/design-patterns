class User { }
class Customer { }
class Admin { }

export default class UserFactory {
  static create(type, props) {
    switch (type) {
      case 'user': return new User(props);
      case 'customer': return new Customer(props);
      case 'admin': return new Admin(props);
      default:
        throw new Error('Wrong user type passed');
    }
  }
}

const user1 = UserFactory.create('admin');
const user2 = UserFactory.create('customer');
const user3 = UserFactory.create('user');
console.log(user1, user2, user3);
