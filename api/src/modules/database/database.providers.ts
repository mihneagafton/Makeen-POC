import { Sequelize } from 'sequelize-typescript';
import { Collection } from '../collections/collection.entity';
import { Group } from '../groups/group.entity';
import { Item } from '../items/item.entity';
import { Role } from '../roles/role.entity';
import { RolesUsers } from '../users/roles-users.entity';
import { User } from '../users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'postgres',
      });
      sequelize.addModels([RolesUsers, User, Item, Collection, Group, Role]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
