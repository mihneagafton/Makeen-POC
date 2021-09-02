import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username);

        if(user && user.password === password) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = {name: user.name, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
