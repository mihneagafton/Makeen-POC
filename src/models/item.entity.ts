import { Column, Entity } from "typeorm";
import { BaseEntity } from 'src/models/base.entity';

@Entity('item')
export class ItemEntity extends BaseEntity {
    @Column({ default: '', length: 300 })
    name: string;

    @Column({ default: '0' })
    parent_id: string;
}