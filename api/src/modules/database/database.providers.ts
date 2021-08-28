import { Sequelize } from 'sequelize-typescript';
import { Collection } from '../collections/collection.entity';
import { Group } from '../groups/group.entity';
import { Item } from '../items/item.entity';

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
      sequelize.addModels([Collection, Item, Group]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
