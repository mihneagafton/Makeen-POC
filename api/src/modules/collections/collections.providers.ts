import { Collection } from './collection.entity';

export const collectionsProviders = [
  {
    provide: 'COLLECTIONS_REPOSITORY',
    useValue: Collection,
  },
];
