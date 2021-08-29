import { Table, Column, Model, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Group } from '../groups/group.entity';
import { Item } from '../items/item.entity';

@Table
export class Collection extends Model<Collection> {
    @Column({
        allowNull: false,
    })
    name: string;

    @Column({})
    @ForeignKey(() => Group)
    groupId: number;

    @HasMany(() => Item)
    items: Item[];

    @BelongsTo(() => Group)
    group: Group;
}
