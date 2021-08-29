import { Item } from 'src/modules/items/item.entity';

export const itemsProviders = [
  {
    provide: 'ITEMS_REPOSITORY',
    useValue: Item,
  },
];
