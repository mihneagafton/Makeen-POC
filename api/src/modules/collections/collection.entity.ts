import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Collection extends Model<Collection> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
}
