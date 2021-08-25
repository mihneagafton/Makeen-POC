import { Column, Entity, OneToMany } from "typeorm";
import { RoleEntity } from "src/models/role.entity";
import { BaseEntity } from "src/models/base.entity";

@Entity('user')
export class UserEntity extends BaseEntity {
    @Column({ default: '', length: 300 })
    email: string;

    @OneToMany(() => RoleEntity, (RoleEntity) => RoleEntity.role)
    roles: RoleEntity[];
}