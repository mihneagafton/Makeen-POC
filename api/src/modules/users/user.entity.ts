import { Column, Table, Model, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/modules/roles/role.entity";
import { RolesUsers } from "src/modules/users/roles-users.entity";


@Table
export class User extends Model<User> {
    @Column({
        allowNull: false,
    })
    email: string;

    @Column({
        allowNull: false,
    })
    username: string;

    @Column({
        allowNull: false,
    })
    password: string;

    @BelongsToMany(() => Role, () => RolesUsers)
    roles: Role[];
}
