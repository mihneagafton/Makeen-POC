import { Model, Column, ForeignKey, Table, HasMany } from "sequelize-typescript";
import { User } from "src/modules/users/user.entity";
import { Role } from "src/modules/roles/role.entity";

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