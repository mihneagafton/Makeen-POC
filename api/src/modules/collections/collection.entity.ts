import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Item } from '../items/item.entity';

@Table
export class Collection extends Model<Collection> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @HasMany(() => Item)
    items: Item[];
}
