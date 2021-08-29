import { Table, Column, Model, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { Group } from '../groups/group.entity';
import { User } from '../users/user.entity';
import { RolesUsers } from '../users/roles-users.entity';

type RoleStatus = 'regular'|'manager'|'globalManager';

@Table
export class Role extends Model<Role> {
    
    @Column({
        allowNull: false,
    })
    role: RoleStatus;

    @Column
    @ForeignKey(() => Group)
    groupId: number;

    @BelongsTo(() => Group)
    group: Group;

    @BelongsToMany(() => User, () => RolesUsers)
    users: User[];

}
