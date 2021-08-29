import { Sequelize } from 'sequelize-typescript';
import { Collection } from 'src/modules/collections/collection.entity';
import { Group } from 'src/modules/groups/group.entity';
import { Item } from 'src/modules/items/item.entity';
import { Role } from 'src/modules/roles/role.entity';
import { RolesUsers } from 'src/modules/users/roles-users.entity';
import { User } from 'src/modules/users/user.entity';

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
