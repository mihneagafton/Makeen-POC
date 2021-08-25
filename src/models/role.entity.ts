import { Column, Entity } from "typeorm";
import { Role } from "src/models/role.enum";
import { BaseEntity } from "src/models/base.entity";

@Entity('role')
export class RoleEntity extends BaseEntity {
    @Column({ type: 'enum', enum: Role, default: Role.REGULAR })
    role: Role;

    @Column()
    groupId: string;
}