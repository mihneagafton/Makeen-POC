import { Collection } from 'src/modules/collections/collection.entity';

export const collectionsProviders = [
  {
    provide: 'COLLECTIONS_REPOSITORY',
    useValue: Collection,
  },
];
