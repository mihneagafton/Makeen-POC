import { Column, HasMany, Table, Model, BelongsToMany } from "sequelize-typescript";
import { Role } from "../roles/role.entity";
import { RolesUsers } from "./roles-users.entity";


@Table
export class User extends Model<User> {
    @Column({
        allowNull: false,
    })
    email: string;

    @BelongsToMany(() => Role, () => RolesUsers)
    roles: Role[];
}
