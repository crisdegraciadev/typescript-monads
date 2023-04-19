import { User } from '../types/user.type';

export class UserRepo {
  private users: User[] = [
    {
      id: 1,
      username: '@crisdegraciadev',
      email: 'crisdegraciadev@gmail.com',
      interests: ['Angular', 'OOP', 'React'],
    },
  ];

  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
