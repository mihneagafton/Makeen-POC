import { Group } from './group.entity';

export const groupsProviders = [
  {
    provide: 'GROUPS_REPOSITORY',
    useValue: Group,
  },
];
