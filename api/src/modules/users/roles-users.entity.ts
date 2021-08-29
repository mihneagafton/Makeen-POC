import { Model, Column, ForeignKey, Table, HasMany } from "sequelize-typescript";
import { User } from "./user.entity";
import { Role } from "../roles/role.entity";

@Table
export class RolesUsers extends Model<RolesUsers> {
    @Column({
        allowNull: false,
    })
    @ForeignKey(() => Role)
    roleId: number;

    @Column({
        allowNull: false,
    })
    @ForeignKey(() => User)
    userId: number;
}