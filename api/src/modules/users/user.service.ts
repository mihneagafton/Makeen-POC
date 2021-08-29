import { Injectable, Inject } from '@nestjs/common';
import { Role } from '../roles/role.entity';
import { RolesUsers } from './roles-users.entity';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    @Inject('ROLES_USERS_REPOSITORY')
    private rolesUsersRepository: typeof RolesUsers
  ) {}

  async create(user: User): Promise<User> {
    return await this.usersRepository.create<User>(user);
  }
  
  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>({
      include: [{
        model: Role
      }]
    });
  }

  async findById(id: number): Promise<User> {
    return await this.usersRepository.findByPk<User>(id, {
        include: [{
          model: Role
        }]
      });
  }

  async update(id: number, user: User) {
    const [numberOfAffectedRows, [updatedUser]] = await this.usersRepository.update({ ...user }, { where: { id }, returning: true });
    return { numberOfAffectedRows, updatedUser };
  }

  async delete(id: number) {
    return await this.usersRepository.destroy({ where: { id } });
  }

  async addRole(rolesUsers: RolesUsers): Promise<RolesUsers> {
    return await this.rolesUsersRepository.create<RolesUsers>(rolesUsers);
  }
}
