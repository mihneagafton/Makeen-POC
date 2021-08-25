import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/models/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    createUser(user: UserEntity): Observable<UserEntity> {
        return from(this.userRepository.save(user));
    }

    findAllUsers(): Observable<UserEntity[]> {
        return from(this.userRepository.find());
    }

    findUserById(id: number): Observable<UserEntity> {
        return from(this.userRepository.findOne(id));
    }

    updateUser(id: number, user: UserEntity): Observable<UpdateResult> {
        return from(this.userRepository.update(id, user));
    }

    deleteUser(id: number): Observable<DeleteResult> {
        return from(this.userRepository.delete(id));
    }
}
