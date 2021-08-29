import { Table, Column, Model,  HasMany} from 'sequelize-typescript';
import { Collection } from 'src/modules/collections/collection.entity';
import { Role } from 'src/modules/roles/role.entity';

@Table
export class Group extends Model<Group> {
    @Column({
        allowNull: false,
    })
    name: string;

    @HasMany(() => Collection)
    collections: Collection[];

    @HasMany(() => Role)
    roles: Role[];
}
