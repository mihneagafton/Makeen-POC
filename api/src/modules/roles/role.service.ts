import { Inject, Injectable } from '@nestjs/common';
import { Role } from 'src/modules/roles/role.entity';

@Injectable()
export class RoleService {
    constructor(
        @Inject('ROLES_REPOSITORY')
        private rolesRepository: typeof Role
      ) {}
    
      async create(role: Role): Promise<Role> {
        return await this.rolesRepository.create<Role>(role);
      }
      
      async findAll(): Promise<Role[]> {
        return await this.rolesRepository.findAll<Role>();
      }
    
      async findById(id: number): Promise<Role> {
        return await this.rolesRepository.findByPk<Role>(id);
      }
    
      async update(id: number, role: Role) {
        const [numberOfAffectedRows, [updatedRole]] = await this.rolesRepository.update({ ...role }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedRole };
      }
    
      async delete(id: number) {
        return await this.rolesRepository.destroy({ where: { id } });
      }
}


