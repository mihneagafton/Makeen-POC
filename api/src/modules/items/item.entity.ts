import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Collection } from '../collections/collection.entity';

@Table
export class Item extends Model<Item> {
    @Column({
        allowNull: false,
    })
    name: string;

    @Column({
        allowNull: false,
    })
    @ForeignKey(() => Collection)
    parentId: number;

    @BelongsTo(() => Collection)
    parent: Collection;
}
