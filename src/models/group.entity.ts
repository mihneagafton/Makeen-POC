import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/models/base.entity";

@Entity('group')
export class GroupEntity extends BaseEntity {
    @Column({ default: '', length: 300 })
    name: string;

    @Column("text", { array: true })
    collectionIds: string[];
}