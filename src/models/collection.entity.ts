import { Column, Entity } from "typeorm";
import { BaseEntity } from 'src/models/base.entity';

@Entity('collection')
export class CollectionEntity extends BaseEntity {
    @Column({ default: '', length: 300 })
    name: string;
}