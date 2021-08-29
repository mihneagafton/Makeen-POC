import { Table, Column, Model,  HasMany, ForeignKey } from 'sequelize-typescript';
import { Collection } from '../collections/collection.entity';

@Table
export class Group extends Model<Group> {
    @Column({
        allowNull: false,
    })
    name: string;

    @HasMany(() => Collection)
    collections: Collection[];
}
