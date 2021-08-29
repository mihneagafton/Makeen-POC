import { Table, Column, Model, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { Group } from 'src/modules/groups/group.entity';
import { User } from 'src/modules/users/user.entity';
import { RolesUsers } from 'src/modules/users/roles-users.entity';
import { RoleEnum } from 'src/modules/roles/role.enum';

@Table
export class Role extends Model<Role> {
    
    @Column({
        allowNull: false,
    })
    role: RoleEnum;

    @Column
    @ForeignKey(() => Group)
    groupId: number;

    @BelongsTo(() => Group)
    group: Group;

    @BelongsToMany(() => User, () => RolesUsers)
    users: User[];

}
